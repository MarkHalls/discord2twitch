const Discordie = require('discordie');
const tmi = require("tmi.js");

var discordClient = new Discordie();

discordClient.connect({
	token: 'MzU4ODExNjU5MjEwNDU3MDg5.DJ982g.Bu1Sdj0MfGhJM-TJGec2sRF-XqM'
});

discordClient.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + discordClient.User.username);
});

discordClient.Dispatcher.on("MESSAGE_CREATE", e => {
	tmiClient.say("firesetter", e.message.content);
});

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "firesetter",
        password: "oauth:iyo79ut0i2awrtao39gtqw7cn0q6w8"
    },
    channels: ["#firesetter"]
};

const tmiClient = new tmi.client(options);

tmiClient.connect();

tmiClient.on("chat", (channel, userstate, message, self) => {
	discordChannel()[0].send('received message');
});

tmiClient.on("connected", () => tmiClient.action("#firesetter", "hello world"));