import { Transform } from 'node:stream';

const transform = async () => {
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join(""));
            callback();
        }
    });

    process.stdin.pipe(transformData).pipe(process.stdout);
};

await transform();