import axios from "axios";
import * as m3u8Parser from "m3u8-parser";

const channel = "joshog";
const clientId = "r9oouhlom01l7aauf8n1mt89pnzbpp";
axios
  .get(
    `https://api.twitch.tv/api/channels/${channel}/access_token?client_id=${clientId}`
  )
  .then(res => {
    const uriToken = encodeURIComponent(res.data.token);
    return axios.get(
      `https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res
        .data.sig}&`
    );
  })
  .then(res => {
    console.log(res.data);

    let parser = new m3u8Parser.Parser();
    parser.push(res.data);
    parser.end();

    const parsedManifest = parser.manifest;
    console.log(parsedManifest);
  })
  .catch(err => {
    console.error(err);
    // if (err.response.status === 404) {
    //   console.log("Oh Noes, I haz 404");
    // }
  });
