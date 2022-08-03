const { Thought, User } = require('../models');

const getAllThoughts = async (req, res) => {
	try {
		const thoughts = await Thought.find({});
		return res.json({ data: thoughts });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
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

const createThought = async (req, res) => {
	try {
		const thought = req.body;
		await Thought.create(thought);
		return res.status(200).json({ success: true });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const updateThought = async (req, res) => {
	try {
		const thought = req.body;
		await Thought.update(thought);
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const deleteThought = async (req, res) => {
	return res.send('deleteThought');
};
module.exports = {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
};
