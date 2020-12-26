var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
    target:'http://172.31.2.99:9090/portal/home/index'
})

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    console.log('on proxyReq')
    console.log('req',options)
    // proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  });

var server = http.createServer(function(req,res){
    // proxy.web(req, res);
    setTimeout(function () {
        proxy.web(req, res);
      }, 500);
})

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('777')
    res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
  }).listen(9008);

server.listen(8888)
console.log("listening on port 8888")