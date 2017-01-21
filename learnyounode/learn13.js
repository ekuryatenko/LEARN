var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var path = req.url;
        var pathObj = url.parse(path, true);

        var resObj;

        if(pathObj.pathname == "/api/parsetime"){
            var str = Date.parse(pathObj.query.iso);
            var strDate = new Date(str);
            resObj = {
                hour  : strDate.getHours(),
                minute: strDate.getMinutes(),
                second: strDate.getSeconds()
            };
        }else if(pathObj.pathname == "/api/unixtime"){
            var str = Date.parse(pathObj.query.iso);
            var strDate = new Date(str).getTime();
            resObj = {
                unixtime: strDate
            };
        }

        if(resObj) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(resObj));
        }else{
            res.writeHead(404);
            res.end();
        }
    }
});

server.listen(process.argv[2]);