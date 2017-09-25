import { twitchClient } from "./twitch";
import { discordClient } from "./discord";
import * as secretsJson from "./common/config/secrets.json";

console.log(secretsJson);

const twitch = twitchClient(secretsJson);
const discord = discordClient(secretsJson);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
