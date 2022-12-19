const fetch = require('node-fetch');

async function getServerList() {
    return await fetch("https://api.invidious.io/instances.json").then(function (response) {
        return response.json();
    }).then(function (data) {
        let serverList = [];

        for (let x = 0; x < data.length; x++) {
            let server = data[x][1];

            // Making sure cors and api are enabled
            if (server.api != false && server.api != null) {

                //Checks to make sure server health is good
                if (parseFloat(server.monitor.dailyRatios[0].ratio) >= 80) {
                    serverList.push({
                        name: server.monitor.name,
                        region: server.region,
                        info: server
                    });
                }
            }
        }

        return serverList;
    });
}

module.exports.getServerList = getServerList;