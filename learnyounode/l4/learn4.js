var fs = require("fs");
/**
 * Created by user on 08.01.2017.
 */
var file = process.argv[2];

 fs.readFile(file, ['utf8'], function (err, dataBuf) {
     if (err) throw err;

     var str = dataBuf.toString();
     console.log(str.split(/\n/).length - 1);
 });

/*
var names = '1 \n 2 \n 3 \n 4';

var arr = names.split(/\n/);

console.log(arr);*/
