const Discordie = require('discordie');
const tmi = require("tmi.js");
const config = require("./secrets.json");

const tmiOptions = {
	options: {
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity: {
		username: config.user,
		password: config.twitch_user_oauth
	},
	channels: [config.twitch_channel]
};

const tmiClient = new tmi.client(tmiOptions);
const discordClient = new Discordie();

tmiClient.connect();
discordClient.connect({	token: config.discord_bot_token });

discordClient.Dispatcher.on("GATEWAY_READY", () => console.log("Connected to Discord as:", discordClient.User.username));

discordClient.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.author.username !== config.discord_botname) {
	tmiClient.say(config.twitch_channel, e.message.content);
	}
});

tmiClient.on("connected", () => console.log("Connected to Twitch as:", config.user));

tmiClient.on("chat", (channel, userstate, message, self) => {
	const guild = discordClient.Guilds.find(g => g.name == config.discord_server);
	if (!guild) return console.log("invalid guild");
	
	const chan = guild.channels;
	if (!self) {
		// chan[0].sendMessage(JSON.stringify({channel, userstate, message, self}));	
		chan[0].sendMessage(`*${userstate.username}:* ${message}`);
	}
});
