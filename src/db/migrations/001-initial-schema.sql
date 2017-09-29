-- Up
CREATE TABLE users (
	id							INTEGER			PRIMARY KEY,
	discord_id			TEXT				COLLATE NOCASE,
	twitch_name			TEXT				COLLATE NOCASE,
	twitch_oauth		TEXT				COLLATE NOCASE
);

-- Down
DROP TABLE users;