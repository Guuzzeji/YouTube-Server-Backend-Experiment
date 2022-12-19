const userAgentGen = require('random-useragent');
const HttpsProxyAgent = require('https-proxy-agent');
const fetch = require('node-fetch');

async function hideFetch(url) {

    // const proxyAgent = new HttpsProxyAgent('http://41.90.9.45:8080');

    return await fetch(url, {
        headers: {
            "User-Agent": userAgentGen.getRandom()
        },
        // agent: proxyAgent
    });
}

module.exports.hideFetch = hideFetch;