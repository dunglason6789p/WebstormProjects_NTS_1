const fs = require('fs');

const totalArray = [];
fs.readdirSync("vat_gia__all_pages").forEach(file => {
    // fs.readFile('..\\hoi-dap\\'+file, 'utf8', function(err, data) {
    //     if (err) {
    //         throw err;
    //     } else {
    //
    //     }
    // });

    // console.log(file);
    const obj = JSON.parse(fs.readFileSync('vat_gia__all_pages\\'+file, 'utf8'));
    const fileNameSplitBy_ = file.split("_");
    const mainArray = obj.arr;
    for(let item of mainArray){
        item.categoryL1 = fileNameSplitBy_[1];
        item.categoryL2 = fileNameSplitBy_[2];
        totalArray.push(item);

        //fs.appendFileSync('output\\output.txt', JSON.stringify(item)+'\r\n');
    }
});

fs.writeFileSync('output\\vatgia_allpages.json', JSON.stringify({totalArray:totalArray}));