import * as tmiClient from "./twitch/client";
import * as discordClient from "./discord/client";

tmiClient.connect();
discordClient.connect({ token: secretsJson.discord_bot_token });
