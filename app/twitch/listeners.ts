const setListeners = (discordClient, secretsJson) => {
  client.on("connected", () =>
    console.log("Connected to Twitch as:", secretsJson.user)
  );

  client.on("chat", (channel, userstate, message, self) => {
    discordClient.say(userstate.username, message);
  });
};

export default setListeners;
