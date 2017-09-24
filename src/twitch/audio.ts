import axios from "axios";

const channel = "disguisedtoasths";
const clientId = "r9oouhlom01l7aauf8n1mt89pnzbpp";
axios
  .get(
    `https://api.twitch.tv/api/channels/${channel}/access_token?client_id=${clientId}`
  )
  .then(res => {
    const uriToken = encodeURIComponent(res.data.token);
    // console.log(res.data, "\n", uriToken);
    console.log(
      `https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res
        .data.sig}&`
    );
    axios
      .get(
        `https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res
          .data.sig}&`
      )
      .then(res => console.log(res.data))
      .catch(err => {
        if (err.response.status === 404) {
          console.log("Oh Noes, I haz 404");
        }
      });
  });
