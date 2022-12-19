# YouTube Server Backend Experiment

A experiment to understand how MPD files work and understand how YouTube backend works when it comes to streaming video / audio files.

## How it Works
How this project works is by first getting YouTube's MPD file for a specific video and then processes the MPD file in order to redirect the links towards a custom server (the cors server). Then it can finally send the custom MPD file to the client that requested the video. Essentially, this project acts as a proxy for watching YouTube videos. 


## TODO LIST
- [x] Create MPD file parser, that switches google url to api url
- [x] Create api call that allows server to fetch video from google servers
- [x] Create test html and video
- [ ] (Optional) Add which region a video is block from, using https://polsy.org.uk/stuff/ytrestrict.cgi


### Tools / Links / Docs
- use this to what region a video is blocked https://polsy.org.uk/stuff/ytrestrict.cgi, just need to parse data
- https://api.invidious.io/ (getting server data)
- Use video api (https://github.com/sampotts/plyr), should download and add build to dependencies list
- https://docs.invidious.io/instances/ (Has more then one server can setup custom server) - this one is better
- https://sr.ht/~cadence/tube/ (CloudTube)
- https://redirect.invidious.io/watch?v=A7pGwBSmzrc&t=14 (generate live list servers to use)
- Use Dashurl from video api, use dash,js (https://github.com/Dash-Industry-Forum/dash.js/)

## Helps
- https://medium.com/litslink/node-js-video-streaming-and-segmentation-in-examples-a1f094dbe8ef
- https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js
- https://stackoverflow.com/questions/38788721/how-do-i-stream-response-in-express
- https://stackoverflow.com/questions/23751914/how-can-i-set-response-header-on-express-js-assets
- https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries
- https://stackoverflow.com/questions/43007961/how-to-pass-a-url-as-a-url-parameter-in-express