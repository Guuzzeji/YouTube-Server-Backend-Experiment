const XML = require('xml-js');


//! NOTE: Should download files instead of ripping files from google servers
// How to chunk send files https://dev.to/abdisalan_js/how-to-stream-video-from-mongodb-using-nodejs-4ibi

//! Note: To fix shit stream quality, remove everything below 480p, this will force 480p as defualt stream
// Idea is from https://www.reddit.com/r/userscripts/comments/vg0aa4/force_reddit_to_play_the_highest_quality_video/
function encodeMPDUrl(mpdXML) {
    let parsedDash = JSON.parse(XML.xml2json(mpdXML, { compact: true }));
    let videoSegs = parsedDash.MPD.Period.AdaptationSet;

    console.log(videoSegs);

    for (let i = 0; i < videoSegs.length; i++) {

        if (videoSegs[i]._attributes != undefined && videoSegs[i]._attributes.mimeType == "audio/mp4") {

            // videoSegs[i].Representation.SegmentBase.Initialization._attributes.range = "/API/mpdURL=" + encodeURIComponent(videoSegs[i].Representation.BaseURL._text);

            // videoSegs[i].Representation.BaseURL._text = "http://localhost:8080/" + encodeURIComponent(videoSegs[i].Representation.BaseURL._text);

            console.log(videoSegs[i].Representation);

            videoSegs[i].Representation.BaseURL._text = "http://localhost:8080/" + videoSegs[i].Representation.BaseURL._text;
        }


        for (let j = 0; j < videoSegs[i].Representation.length; j++) {

            // if (videoSegs[i].Representation[j].SegmentList != undefined) {
            //     videoSegs[i].Representation[j].SegmentList.Initialization._attributes.sourceURL = "/API/mpdURL=" + encodeURIComponent(videoSegs[i].Representation[j].BaseURL._text);
            // } else {
            //     videoSegs[i].Representation[j].SegmentBase.Initialization._attributes.range = "/API/mpdURL=" + encodeURIComponent(videoSegs[i].Representation[j].BaseURL._text);
            // }

            // videoSegs[i].Representation[j].BaseURL._text = "http://localhost:8080/" + encodeURIComponent(videoSegs[i].Representation[j].BaseURL._text);

            videoSegs[i].Representation[j].BaseURL._text = "http://localhost:8080/" + videoSegs[i].Representation[j].BaseURL._text;
        }
    }

    return XML.json2xml(JSON.stringify(parsedDash), { compact: true });
}

module.exports.encodeMPDUrl = encodeMPDUrl;
