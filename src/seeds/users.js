const { faker } = require('@faker-js/faker');

const USERS_NUMBER = 10;

const usersArray = new Array(USERS_NUMBER).fill('');

const users = usersArray.map((_) => {
	const username = faker.internet.userName();
	const email = `${username}@email.com`;

	return {
		username,
		email,
	};
});

module.exports = users;
