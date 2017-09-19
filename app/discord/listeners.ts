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

export default setListeners;
