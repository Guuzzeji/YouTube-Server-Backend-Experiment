const express = require('express');
const router = express.Router();

const encodeMPDUrl = require('../src/parseMPD').encodeMPDUrl;
const getServerList = require('../src/fetchServerInfo').getServerList;
const fetch = require('../src/hideFetch').hideFetch;


//! NOTE https://yewtu.be/embed/bjTlmQCB020?local=true&quality=dash, does the same thing as what you are trying to do

//! Note: Try switching to youtube-dl to get dashmpd file
// Try this to get mpd file: https://stackoverflow.com/questions/62447887/how-to-download-mpeg-dash-mpd-file-using-youtube-dl-when-headers-are-requested

//! Note: try using ytdl-core to generate mpd file

// Add ?local or &local to urls, this will proxy videos address
// Example: https://invidious.snopyta.org/api/v1/videos/aqz-KE-bpKQ?local=true
// From https://docs.invidious.io/proxy-videos/
router.get('/generateMPD=:videoid', async function (req, res) {
    const URL = `https://inv.riverside.rocks/api/v1/videos/${req.params.videoid}`;

    let infoJSON = await fetch(URL).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data;
    });

    let dashXML = await fetch(infoJSON.dashUrl).then(function (response) {
        return response.text();
    }).then(function (data) {
        return data;
    });

    // res.setHeader('Content-Type', 'application/dash+xml');
    res.setHeader('Content-Type', 'application/xml');
    res.send(encodeMPDUrl(dashXML));
});

//! Note: Try using https://github.com/Rob--W/cors-anywhere/#documentation
// - https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
// router.get('/mpdURL=:url', async function (req, res) {

//     console.log(req.params.url);

//     let video = await fetch(req.params.url, { headers: req.headers }).catch(function (err) {
//         console.log(err);
//     });

//     //copy over headers to client
//     res.status(video.status);
//     for (const pair of video.headers.entries()) {
//         res.set(pair[0], pair[1]);
//         // console.log(`${pair[0]}: ${pair[1]}`);
//     }

//     //sending data to client
//     video.body.on('data', function (data) {
//         return res.write(data);
//     });

//     //send end message when done
//     video.body.on('end', function () {
//         res.end();
//     });
// });


router.get('/ServerStatus', async function (req, res) {
    res.send(await getServerList());
});

module.exports = router;