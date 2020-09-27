var http = require("http");

var url = require("url");

/**
 * run `localhost:8888` to show "Hello World"
 * start
 */
// http.(function(request,response) {
//     response.writeHead(200,{"Content-type":"text/plain"});
//     response.write("Hello World!");
//     response.end();
// }).listen(8888);
/**
 * end
 */

function start(route, handle) {
    function onRequest(request, response){

        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + "received");

        // route(handle,pathname);
        route(handle,pathname,response);

        response.writeHead(200,{"Content-type":"text/plain"});
        response.write("One Index");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    // http.createServer(onRequest);
}


// module.exports 初始值为一个空对象 {}
// exports 是指向的 module.exports 的引用
exports.start = start;
