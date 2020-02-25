var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

var writeStream = fs.createWriteStream("vne2.txt", {flags:'a'});

var getStream = function () {
    var jsonData = '../data/TOTAL.txt',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        // parser = JSONStream.parse('students.id');
        parser = JSONStream.parse(['response', 'docs', true, 'content']);
    return stream.pipe(parser);
};

getStream()
    .pipe(es.mapSync(function (data) {
        //console.log(data);
        writeStream.write(data+"\n");
    }));