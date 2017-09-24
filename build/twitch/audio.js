"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const channel = "disguisedtoasths";
const clientId = "r9oouhlom01l7aauf8n1mt89pnzbpp";
axios_1.default
    .get(`https://api.twitch.tv/api/channels/${channel}/access_token?client_id=${clientId}`)
    .then(res => {
    const uriToken = encodeURIComponent(res.data.token);
    console.log(`https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res
        .data.sig}&`);
    axios_1.default
        .get(`https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res
        .data.sig}&`)
        .then(res => console.log(res.data))
        .catch(err => {
        if (err.response.status === 404) {
            console.log("Oh Noes, I haz 404");
        }
    });
});
//# sourceMappingURL=audio.js.map