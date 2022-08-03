const users = require('./users');
const { User } = require('../../models');
const connectToDatabase = require('../../config/connection');

const seedUsers = async () => {
	console.log(users);

	const promises = users.map((user) => User.create(user));
	await Promise.all(promises);
	console.log('Successfully seeded users');
};
const init = async () => {
	try {
		await connectToDatabase();
		await seedUsers();
		console.log('Seeding complete!!');
	} catch (error) {
		console.log(`[ERROR]: Failed to seed | ${error.message}`);
	}

	// kill node process
	process.exit(0);
};

init();
