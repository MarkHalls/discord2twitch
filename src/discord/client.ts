import * as Discord from "discord.js";
import { Secrets } from "../common/types";

const discordClient = (secretsJson: Secrets) => {
  const client = new Discord.Client();

  const say = (username: string, message: string) => {
    const guild = client.guilds.find(g => g.name === secretsJson.discord_server);
    if (!guild) return console.log("invalid guild");

    if (secretsJson.discord_botname !== username) {
      const chan = guild.channels
        .find(ch => ch.type === "text") as Discord.TextChannel;
      chan.send(`**${username}:** ${message}`);
    }
  };

  const connect = () => {
    client.login(secretsJson.discord_bot_token);
  };

  const setListeners = twitchClient => {
    client.on("ready", () =>
      console.log("Connected to Discord as:", client.user.username)
    );

    client.on("message", message => {
      if (message.author.username !== secretsJson.discord_botname) {
        twitchClient.say(null, message.cleanContent);
      }
    });
  };

  return {
    connect,
    say,
    setListeners
  };
};

export { discordClient };
