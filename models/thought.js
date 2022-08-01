const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./reaction');

const ThoughtSchema = {
	thoughtText: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 100,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (createdAtVal) =>
			moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
	},
	userName: {
		type: String,
		required: true,
	},
	reactions: [reactionSchema],
};
// FIND OUT HOW TO MAKE VIRTUALS
const schema = new Schema(ThoughtSchema);

const Thought = model('Thought', schema);

module.exports = Thought;
