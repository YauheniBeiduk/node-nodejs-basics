import path from 'node:path';
import { readFile } from 'fs/promises';
import { release, version } from'node:os';
import { fileURLToPath } from 'node:url';
import { createServer as createServerHttp } from "node:http";
import './files/c.js';


const __filename = fileURLToPath(new URL('', import.meta.url));
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = 3000;
const random = Math.random();

const a = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)));
const b = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)));

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);
console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
