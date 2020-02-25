var fs = require('fs');
var dantriTotal = JSON.parse(fs.readFileSync('../dantri2-json/dantri2-json.txt', 'utf8'));

var stream = fs.createWriteStream("../dantri2-json/output/dantri2-text.txt", {flags:'a'});
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