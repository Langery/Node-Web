var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called");

    // function sleep(milliSeconds){
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);
    // return "Hello Stsrt";

    // var content = "empty";
    // 非阻塞操作: exec()
    // exec("ls-lah",function(error,stdout,stderr){
    exec("find/",
        {timeout:10000,maxBuffer:20000*1024},
        function(error,stdout,stderr){
            // stdout(Standardoutput) 标准输出
            // stderr(Standarderror) 标准错误
        // content = stdout;
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });

    // return content;
};
function upload(response){
    console.log("Request handler 'upload' was called")
    // return "Hello Upload";
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();
};

function show(response) {

};

exports.start = start;
exports.upload = upload;
exports.show = show;
