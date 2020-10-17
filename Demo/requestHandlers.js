var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called");

};
function upload(response){
    console.log("Request handler 'upload' was called")
    // return "Hello Upload";
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();
};

function show(response) {
    console.log("Request handler 'show' was called");
};

exports.start = start;
exports.upload = upload;
exports.show = show;
