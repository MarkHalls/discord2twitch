import { twitchClient } from "./twitch";
import { discordClient } from "./discord";
import * as botconfig from "./common/config/botconfig.json";

const twitch = twitchClient(botconfig);
const discord = discordClient(botconfig);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
