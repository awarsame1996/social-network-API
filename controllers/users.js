const { User, Thought } = require('../models');

const getAllUsers = async (req, res) => {
	try {
		const user = await User.find({});
		return res.json({ data: user });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const getUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id).populate('thoughts');

		console.log(user);
		if (!user) {
			return res.status(404).json({ success: false });
		}
		return res.json({ data: user });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const createUser = async (req, res) => {
	try {
		const user = req.body;
		await User.create(user);
		return res.status(200).json({ success: true });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {
	return res.send('deleteUser');
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
