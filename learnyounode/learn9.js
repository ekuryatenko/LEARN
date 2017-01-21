var http = require("http");
var bl = require('bl');

var RESULTS = [];
var cnt = 3;

function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(RESULTS[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function(response){
        response.setEncoding('utf8');

        response.pipe(concatStream(function (buff) {
            var str = buff.toString();
            RESULTS[index] = str;

            cnt--;

            if(!cnt){
                printResults ();
            }
        }));
    }).on('error', function(e) {
        console.log("GOT ERROR: " + e.message);
    });
}

for (var i = 0; i < 3; i++) {
    /** ТОЛЬКО ТАК!! Для каждого async процесса своя функция */
    httpGet(i)
}

