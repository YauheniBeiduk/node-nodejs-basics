import { createReadStream } from 'node:fs';

const read = async () => {
    const file = './files/fileToRead.txt';
    const filePath = new URL(file, import.meta.url);
    const data = createReadStream(filePath, { encoding: 'utf8' });

    data.pipe(process.stdout);
};

await read();
