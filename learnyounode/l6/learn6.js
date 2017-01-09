var fs = require("fs");
var mymodule = require('./mymodule.js')

/**
 * Created by user on 08.01.2017.
 */
var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, list){
    if(err){
        console.log("ERRROR");
        return;
    }

    list.forEach(function(file) {
        console.log(file);
    });
});

