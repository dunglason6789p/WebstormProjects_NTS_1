const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

const rootFolderToRead = "..\\vnexpress.net";
const rootFolderToWrite = "..\\vne-output2";
const allPathStr = [];
(async function processLineByLine() {
    try {
        const rl = createInterface({
            input: createReadStream('..\\all-pathstr.txt'),
            crlfDelay: Infinity
        });
        rl.on('line', (line) => {
            // console.log(line);
            allPathStr.push(line);
        });
        await once(rl, 'close');
        console.log('---------------all-pathstr.txt processed done.--------------------');
        console.log();

        processAllFiles();

        /* //DEBUG
        allPathStr.forEach((pathStr)=>{
            if(pathStr.trim().length > 0){
                console.log(rootFolderToRead+pathStr);
                if (fs.existsSync(rootFolderToRead+pathStr)) {
                    console.log('EXIST!')
                }else{
                    console.log('NON-EXIST!')
                }
            }
        });
         */
    } catch (err) {
        console.error(err);
    }
})();


let fileCount = 0;
const allPathStr_length = allPathStr.length;
function processAllFiles() {
    allPathStr.forEach(pathStr => {
        fs.readFile(rootFolderToRead+pathStr, 'utf8', function(err, htmlContent) {
            //console.log("reading:  "+rootFolderToRead+pathStr);
            fileCount++;
            const fileCount_saved = fileCount;
            console.log("reading.."+fileCount+"/"+allPathStr_length);
            if (err) {
                throw err;
            } else {
                const $ = cheerio.load(htmlContent);
                const $mainArticleContent = $('article.content_detail').first();
                if($mainArticleContent.length>0){
                    const mainArticleContent = $mainArticleContent.text().trim();
                    //const filePathToWrite = pathStr.replace(/\\\\/,"__"); //pathStr.replace(/[\.\\\/\:\*\?\"\<\>\|]/,"`");
                    //const filePathToWrite = pathStr.split("\\\\");
                    const filePathToWrite = pathStr.replace(/\\/g,"_");
                    fs.writeFile(rootFolderToWrite+"\\"+filePathToWrite, mainArticleContent,'utf8', function (err) {
                        if(err!==null){
                            throw err;
                        }else{
                            console.log("done:  "+fileCount_saved+"/"+allPathStr_length);
                        }
                    });
                }
            }
        });
    });
}

