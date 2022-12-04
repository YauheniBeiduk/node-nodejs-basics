import { spawn } from 'node:child_process';
import url from 'node:url';
import path from 'node:path';

const spawnChildProcess = async (args) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const __filename = path.join(__dirname, 'files', 'script.js');
    const spawnChild = spawn('node', [__filename, ...args]);

    process.stdin.on('data', (data) => {
        spawnChild.stdin.write(data);
    });


    spawnChild.stdout.on('data', (data) => {
        console.log(data.toString());
    });
};

spawnChildProcess([1,2,3,4,5,6,7,8,9]);
