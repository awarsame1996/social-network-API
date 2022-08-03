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
		match: [/^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
	},
	thoughts: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Thought',
		},
	],
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
};

// need to do virtuals FIND OUT HOW

const schema = new Schema(userSchema);

const User = model('User', schema);

module.exports = User;
