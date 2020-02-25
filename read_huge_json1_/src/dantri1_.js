var fs = require('fs');
var dantriTotal = JSON.parse(fs.readFileSync('../dantri1-json/dantri_1_total_json - Copy.txt', 'utf8'));

var stream = fs.createWriteStream("../dantri1-json/output/dantri1_text.txt", {flags:'a'});
console.log('DONE LOADING JSON. NOW WRITING...');
dantriTotal.response.docs.forEach(article=>{
    stream.write(
        //"\r\n"+
        article.url
            .replace('\r',' ')
            .replace('\n',' ')
            .replace('\t',' ')
        +"\t\t"
        +article.content
        +"\r\n"
    );
});