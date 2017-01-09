var fs = require("fs");
/**
 * Created by user on 08.01.2017.
 */
var path = process.argv[2];
var ext = process.argv[3];

 fs.readdir(path, function (err, list) {
     if (err) throw err;

     for(var item of list){
         if(item.split(".")[1] == ext){
             console.log(item);
         }
     }
 });

