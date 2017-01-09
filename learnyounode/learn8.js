var http = require("http");
var concatStream = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding('utf8');

    response.pipe(concatStream(function (buff) {
        var str = buff.toString();
        console.log(str.length);
        console.log(str);
    }));

}).on('error', function(e) {
    console.log("GOT ERROR: " + e.message);
});

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})


