import fs from 'fs';
import path from 'path';

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

export default getFileDetails;