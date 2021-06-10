var http = require('http');
var fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    var path = './views/';

    switch(req.url){
        case '/' : path += 'index.html'
        res.statusCode= 200
        break;
        case '/about' : path += 'about.html'
        res.statusCode = 200
        break;
        case '/about-us' : res.setHeader('Location', '/about')
        res.statusCode = 301
        res.end()
        break;
        default : path += '404.html'
        res.statusCode = 404
        break
    }


    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(4000, 'localhost', () => console.log('Listen to port 4000'))