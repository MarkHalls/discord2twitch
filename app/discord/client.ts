import * as Discordie from "discordie";
import * as secretsJson from "../secrets.json";
import * as listeners from "./listeners";

const client = new Discordie();
client.connect({ token: secretsJson.discord_bot_token });

const say = (username: string, message: string) => {
  const guild = client.Guilds.find(g => g.name == secretsJson.discord_server);
  if (!guild) return console.log("invalid guild");

  const chan = guild.channels;
  if (!self) {
    chan[0].sendMessage(`**${username}:**  ${message}`);
  }
};

const connect = () => {
  client.connect({ token: secretsJson.discord_bot_token });
};

const setListeners = (secretsJson, twitchClient) => {
  client.Dispatcher.on("GATEWAY_READY", () =>
    console.log("Connected to Discord as:", client.User.username)
  );

  client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.author.username !== secretsJson.discord_botname) {
      client.say(user, e.message.content);
    }
  });
};
