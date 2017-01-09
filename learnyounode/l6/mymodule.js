var fs = require("fs");
var path = require('path');

module.exports = function (folder, ext, callback) {
    //console.log("M:", folder, ext);

    fs.readdir(folder, function (err, files) {
        if (err) return callback(err);
        var arr = [];
        files.forEach(function(file) {
            if (path.extname(file) === ("." + ext)) {
                arr.push(file);
            }
        });

        return callback(null, arr);
    })
};

