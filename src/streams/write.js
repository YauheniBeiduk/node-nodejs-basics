import { createWriteStream } from 'node:fs';

const write = async () => {
    const file = './files/fileToWrite.txt';
    const filePath = new URL(file, import.meta.url);
    const writeStream = createWriteStream(filePath);

    process.stdin.write('Type:');
    process.stdin.on('data', data => writeStream.write(data));
};

await write();