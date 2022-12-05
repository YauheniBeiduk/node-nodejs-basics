const parseEnv = () => {
    const REGEX = 'RSS_';
    const envVariables = Object.entries(process.env)
        .reduce((acc,[key, value]) => {
            if (key.match(REGEX)) {
                acc.push(`${key} = ${value}`)
            }
            return acc;
        },[]);
    process.stdout.write(envVariables.join('; '));
};

parseEnv();
