/*
 * This apparently also works... but a little differently
 */
 
 var http = require('http');  //require native HTTP - Node.js apparently includes this
 var listenPort = 8080;       //set a port to listen in
 
 //use more Node.js http functionality to create a listening server...
 http.createServer(function (request, response) {
    resposne.writeHead(200, {'Content-Type': 'text/plain'});   //very basic HTML coded response
    response.end('Hello World...\n\n\n ... and goodbye!\n');  //and the message within.
    } ).listen (listenPort);                                  //finish the createServer call by asking
                                                              //it to lisen at the listenPort

consol.log('Server Started... open a web-browser and goto localhost:' + listenPort + ' to see if it works');

//end
