import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import path from 'node:path';
import url from 'node:url';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToZipFile = path.join(__dirname, 'files', 'archive.gz');

    const unzip = createUnzip();
    const readStream = createReadStream(pathToZipFile);
    const writeStream = createWriteStream(pathToFile);

    pipeline(readStream, unzip, writeStream, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

await decompress();