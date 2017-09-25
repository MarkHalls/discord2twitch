import axios from "axios";

const clientId = "r9oouhlom01l7aauf8n1mt89pnzbpp";
const getStreamUrl = (channel: string) => axios
  .get(
    `https://api.twitch.tv/api/channels/${channel}/access_token?client_id=${clientId}`
  )
  .then(res => {
    const uriToken = encodeURIComponent(res.data.token);
    return `https://usher.ttvnw.net/api/channel/hls/${channel}.m3u8?token=${uriToken}&sig=${res.data.sig}&`
  });

export { getStreamUrl }