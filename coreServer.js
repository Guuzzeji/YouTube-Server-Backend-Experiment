const cors_proxy = require('cors-anywhere');

let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || 8080;

function createCoreServer() {
    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        // requireHeader: ['origin', 'x-requested-with'],
        // removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, function () {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
}

module.exports.createCoreServer = createCoreServer;