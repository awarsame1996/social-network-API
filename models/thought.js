const { Schema, model } = require('mongoose');

const ThoughtSchema = {
	Thoughtname: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		// Using REGEX to validate email
		match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
	},
	thoughts: [
		{
			type: Schema.Type.ObjectId,
			ref: 'Thoughts',
		},
	],
	friends: [
		{
			type: Schema.Type.ObjectId,
			ref: 'Thoughts',
		},
	],
};

const schema = new Schema(ThoughtSchema);

const Thought = model('Thought', schema);

module.exports = Thought;
