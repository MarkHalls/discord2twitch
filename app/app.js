const Discordie = require('discordie');
const tmi = require("tmi.js");

const user = "firesetter";

var discordClient = new Discordie();

discordClient.connect({
	token: 'MzU4ODExNjU5MjEwNDU3MDg5.DJ982g.Bu1Sdj0MfGhJM-TJGec2sRF-XqM'
});

discordClient.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + discordClient.User.username);
});

discordClient.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.author.username !== "discord2twitch") {
		tmiClient.say("firesetter", e.message.content);
	}
});

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: user,
        password: "oauth:iyo79ut0i2awrtao39gtqw7cn0q6w8"
    },
    channels: ["#firesetter"]
};

const tmiClient = new tmi.client(options);

tmiClient.connect();

tmiClient.on("chat", (channel, userstate, message, self) => {
	const guild = discordClient.Guilds.find(g => g.name == "discord2twitch");
	if (!guild) return console.log("invalid guild");
	
	const chan = guild.channels;
	if (userstate.username !== user) {
		// chan[0].sendMessage(JSON.stringify({channel, userstate, message, self}));	
		chan[0].sendMessage(`${userstate.username}: ${message}`);
	}
});

tmiClient.on("connected", () => tmiClient.action("#firesetter", "hello world"));
