import path from 'path';
import express from 'express';
import fs from 'fs';
import getFileDetails from '../js/getFileDetails';
const router = express.Router();


const app = express();
const DIST_DIR = __dirname;
const WEB_FOLDER = path.join(DIST_DIR, 'webapp');
const HTML_FILE = path.join(WEB_FOLDER, 'index.html');
const SERVER_PUBLIC_FOLDER = path.join(__dirname, 'public');

//serve the files from the sibling website 
app.use(express.static(WEB_FOLDER));
app.use(express.static(SERVER_PUBLIC_FOLDER));
app.use(express.static(path.join(SERVER_PUBLIC_FOLDER, 'board')));
app.use(express.static(path.join(SERVER_PUBLIC_FOLDER, 'neighborhood')));
app.use(express.static(path.join(SERVER_PUBLIC_FOLDER, 'yardOfTheMonth')));
app.use(express.static(path.join(SERVER_PUBLIC_FOLDER, 'documents')));

//prefix all calls with /api
app.use('/api', router);

router.get('/healthcheck', (req, res) => {
    res.send('API is running');
});

router.get('/documents/:category', (req, res) => {
    const category = req.params.category;

    console.log(`readying this folder ${path.join(__dirname, 'public', 'documents', category)}`);

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
    const file = HTML_FILE;
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
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
    console.log(`Press Ctrl+C to quit`);
});