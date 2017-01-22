var through2 = require('through2');
var split = require('split');

var up = 1;

var tr = through2(function (line, _, next) {
    if(up%2 != 0){
        this.push(line.toString().toLowerCase());//To queue a new chunk
    }else if(up%2 == 0){
        this.push(line.toString().toUpperCase());
    }
    this.push('\n');
    up++;
    next();//should call the callback function to indicate that the transformation is done
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);