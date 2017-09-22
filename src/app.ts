import { twitchClient } from "./twitch";
import { discordClient } from "./discord";
import * as secretsJson from "./secrets.json";

const twitch = twitchClient(secretsJson);
const discord = discordClient(secretsJson);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
