import { twitchClient } from "./twitch/index";
import { discordClient } from "./discord/index";
import * as secretsJson from "./secrets.json";
const twitch = twitchClient(secretsJson);
const discord = discordClient(secretsJson);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
//# sourceMappingURL=app.js.map