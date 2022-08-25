const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const app = express();

//serve the files from the sibling website 
app.use(express.static(path.join(__dirname, '..', 'website', 'build')));

//serve the files from the servers public folder
app.use(express.static(path.join(__dirname, 'public')));

//prefix all calls with /api
app.use('/api', router);

router.get('/healthcheck', (req, res) => {
    res.send('API is running');
});

router.get('/documents/:category', (req, res) => {
    const category = req.params.category;

    fs.readdir(path.join(__dirname, 'public', 'documents', category), (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send({
                message: 'failed to get documents'
            });
        } else {
            const fileDetails = [];
            files.forEach(filename => {
                const details = getFileDetails(path.join(__dirname, 'public', 'documents', category, filename), category);
                fileDetails.push(details);
            })
            res.send(fileDetails);
        }
    })
})


//If no other route on the server matches at this point, the route request is likely for client-side routing.  Tell the client to look internally for the route
app.use((req, res, next) => {
    const file = path.join(__dirname, '..', 'build', 'index.html');
    const options = {};
    
    res.sendFile(file, options, function(err) {
        // results in a 404 if the page does not exist
        // consider building an error page in the future
        if(err) {
            res.status(err.status).end();
        }
    });
})

const port = process.env.PORT || 5000;
app.listen(port || 5000, () => {
    console.log(`server started on port ${port}`);
});

function getFileDetails(fullFilePath) {
    var stats = fs.statSync(fullFilePath);
    
    const createTime = stats.birthtimeMs;
    const fileSizeInBytes = stats.size;

    const splitPath = fullFilePath.split('\\');
    const [folder1, folder2, filename] = splitPath.slice(-3);
    const location = encodeURI(path.join(folder1, folder2, filename));

    return {
        filename,
        createTime,
        fileSizeInBytes,
        location
    };
}