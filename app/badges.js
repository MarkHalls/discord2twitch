const badgeEmoji = {
	admin:       ':shield:',
	global_mod:  ':crossed_swords:',
	moderator:   ':dagger:',
	subscriber:  ':star:',
	broadcaster: ':movie_camera:',
	premium:     ':moneybag:',
	staff:       ':wrench:',
	turbo:       ':zap:',
};

Object.keys(message.userstate.badges)
	.map(badge => badgeEmoji[badge])
	.join('');