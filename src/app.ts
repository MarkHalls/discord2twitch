import * as minimist from "minimist";
import { columnify } from "columnify";
import * as path from "path";

import { twitchClient } from "./twitch";
import { discordClient } from "./discord";
import * as botconfig from "./common/config/botconfig.json";

const args = minimist(process.argv.slice(2));

switch (true) {
  case args.length > 2:
    console.error(`Error: Too many arguments!`);
  case args.h:
  case args.help:
    const options = {
      "-c": "Update botname and oauth tokens",
      "-k --keygen":
        "Generate encryption keys for securing oauth in the database",
      "-f --file": "Location of encryption key file",
      "-u --update-password": "Update password",
      "-d --delete": "Delete database (forgotten password)"
    };
    console.log(`usage: ${path.basename(__filename)} [-k]\n`);
    console.log(columnify(options, { columns: ["Options:", "Description"] }));
    break;

  case args.v:
    console.log(`version: ${process.env.npm_package_version}`);
    break;

  default:
    const twitch = twitchClient(botconfig);
    const discord = discordClient(botconfig);
    twitch.connect();
    discord.connect();
    twitch.setListeners(discord);
    discord.setListeners(twitch);
}
