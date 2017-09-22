import * as Discordie from "discordie";

const discordClient = secretsJson => {
  const client = new Discordie();

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

  const setListeners = twitchClient => {
    client.Dispatcher.on("GATEWAY_READY", () =>
      console.log("Connected to Discord as:", client.User.username)
    );

    client.Dispatcher.on("MESSAGE_CREATE", e => {
      if (e.message.author.username !== secretsJson.discord_botname) {
        twitchClient.say(null, e.message.content);
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
