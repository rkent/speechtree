/**
 * node app to serve static files
 */
const static = require('node-static');

const port = process.argv[2] || process.env.PORT || 8089

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public', {indexFile: "index.htm"});
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);