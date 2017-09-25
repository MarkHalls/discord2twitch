import * as twitchStreams from "twitch-get-stream";
import * as Discord from "discord.js";
import { Secrets } from "../common/types";
// import { getStreamUrl } from "./audio";

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
    client.on("ready", () => {
      const guild = client.guilds.find(g => g.name === secretsJson.discord_server);
      console.log("Connected to Discord as:", client.user.username);
      const voiceChan = guild.channels
        .find(chan => chan.type === "voice") as Discord.VoiceChannel;
      voiceChan.leave();
      Promise.all([
        voiceChan.join(),
        twitchStreams("r9oouhlom01l7aauf8n1mt89pnzbpp").get("alwaysbecrafting")
      ])
        .then(([connection, links]) => {
          const {url} = links.find(link => link.quality === "Audio Only");

          console.log(links);
          connection.playArbitraryInput(url);
        })
        .catch(console.error)
    });

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
