var http = require("http");

var url = require("url");

// http.createServer(function(request,response) {
//     response.writeHead(200,{"Content-type":"text/plain"});
//     response.write("Hello World!");
//     response.end();
// }).listen(8888);

function start(route,handle) {
    function onRequest(request,response){

        var pathname = url.parse(request.url).pathname;
        // console.log("Request for" + pathname + "received");

        // route(handle,pathname);
        route(handle,pathname,response);

        // response.writeHead(200,{"Content-type":"text/plain"});
        // response.write("One Index");
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
}


// module.exports 初始值为一个空对象 {}
// exports 是指向的 module.exports 的引用

exports.start = start;
