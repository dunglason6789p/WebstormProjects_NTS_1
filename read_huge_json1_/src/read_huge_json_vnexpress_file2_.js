var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

var writeStream = fs.createWriteStream("../vnexpress_file2_/output/vnexpress_file2_textonly_.txt", {flags:'a'});

var getStream = function () {
    var jsonData = '../vnexpress_file2_/input/vnexpress_total_2.txt',
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