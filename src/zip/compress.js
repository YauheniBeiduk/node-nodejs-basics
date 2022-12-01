import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const compress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToZipFile = path.join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();

    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToZipFile);

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

await compress();