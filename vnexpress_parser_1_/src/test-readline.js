const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

const allPathStr = [];
(async function processLineByLine() {
    try {
        const rl = createInterface({
            input: createReadStream('test-readline.txt'),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            allPathStr.push(line);
        });

        await once(rl, 'close');

        console.log('---------------File processed done.--------------------');
    } catch (err) {
        console.error(err);
    }
})();