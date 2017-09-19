import * as tmi from "tmi.js";
import * as secretsJson from "../secrets.json";
import * as listeners from "./listeners";

const tmiOptions = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: secretsJson.user,
    password: secretsJson.twitch_user_oauth
  },
  channels: [secretsJson.twitch_channel]
};

const client = new tmi.client(tmiOptions);

const say = (username: string, message: string) => {
  client.say(secretsJson.twitch_channel, message);
};
