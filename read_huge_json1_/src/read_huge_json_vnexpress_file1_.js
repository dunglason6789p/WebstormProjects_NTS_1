var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

var writeStream = fs.createWriteStream("../vnexpress_file1_/output/vnexpress_file1_textonly_.txt", {flags:'a'});

var getStream = function () {
    var jsonData = '../vnexpress_file1_/input/vnexpress_total_1.txt',
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