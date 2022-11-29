const parseArgs = () => {
    const args = process.argv.slice(2);
    const newArray = [];
    args.forEach((item, i, arr) => {
        if (item.startsWith('--')) {
            newArray.push((`${item.slice(2)} is ${arr[i + 1]}`));
        }
    });
    process.stdout.write(newArray.join(', '));
};

parseArgs();