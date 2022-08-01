const { Schema, model } = require('mongoose');

const userSchema = {
	username: {
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
			ref: 'Thought',
		},
	],
};

const schema = new Schema(userSchema);

const User = model('User', schema);

module.exports = User;
