const { Thought, User } = require('../models');

const getAllThoughts = (req, res) => {
	return res.send('getAllThoughts');
};

const getThoughtById = async (req, res) => {
	try {
		const { id } = req.params;
		const thought = await Thought.findById(id);
		if (!thought) {
			return res.status(404).json({ success: false });
		}
		return res.json({ data: thought });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const createThought = (req, res) => {};

const updateThought = (req, res) => {
	return res.send('updateThought');
};

const deleteThought = (req, res) => {
	return res.send('deleteThought');
};
module.exports = {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
};
