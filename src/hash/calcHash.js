import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto'

const calculateHash = async () => {
    const file = './files/fileToCalculateHashFor.txt';
    const filePath = new URL(file, import.meta.url);
    const content = await readFile(filePath, { encoding: 'utf8' });

    const hash = createHash('sha256');
    const hex = hash.update(content).digest('hex');
    console.log(hex);
};

await calculateHash();