import { Worker } from 'node:worker_threads';
import path from 'node:path';
import url from 'node:url';
import os from 'node:os';

const performCalculations = async () => {
    const countOfCpus = os.cpus().length;
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathToFile = path.join(__dirname, 'worker.js');
    const promises = [];

    for (let i = 0; i < countOfCpus; i++) {
        const results = new Promise((resolve) => {
            const worker = new Worker(pathToFile, { workerData: 10 + i });
            worker.on('message', (result) => {
                resolve({ status: 'resolve', data: result });
            });
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        })
        promises.push(results);
    }

    const calculations = await Promise.all(promises);

    console.log(calculations);
}

await performCalculations();