var url = require('url');
var fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path,null,function(error, data){
        if (error){
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
    });
} 
module.exports = {
  handleRequest: function(request, response){
        response.writeHead(200,{'Content-Type':'text/html'});

        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('./public_html/index.html', response);
                break;
            case '/login':
                renderHTML('./public_html/login.html', response);
                break;
            case './sample':
                renderHTML('./public_html/sample.html', response);
                break;
        }
    }  
};
