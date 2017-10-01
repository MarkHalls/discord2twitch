import * as minimist from "minimist";
import { columnify } from "columnify";
import * as path from "path";

import { twitchClient } from "./twitch";
import { discordClient } from "./discord";
import * as botconfig from "./common/config/botconfig.json";

const args = minimist(process.argv.slice(2));

const usage = () => {
  const options = {
    "-c": "Update botname and oauth tokens",
    "-d --delete": "Delete database (forgotten password)",
    "-f --file": "Location of encryption key file",
    "-k --keygen":
      "Generate encryption keys for securing oauth in the database",
    "-u --update-password": "Update password"
  };
  console.log(`usage: ${path.basename(__filename)} [-k]\n`);
  console.log(columnify(options, { columns: ["Options:", "Description"] }));
};

if (args.length > 2) {
  console.error(`Error: Too many arguments!`);
  usage();
}
if (args.h || args.help) {
  usage();
}
if (args.v) {
  console.log(`version: ${process.env.npm_package_version}`);
} else {
  const twitch = twitchClient(botconfig);
  const discord = discordClient(botconfig);
  twitch.connect();
  discord.connect();
  twitch.setListeners(discord);
  discord.setListeners(twitch);
}
