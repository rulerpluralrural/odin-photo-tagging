import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
	name: {
		type: String,
	},
	imgURL: {
		type: String,
	},
	found: {
		type: Boolean,
	},
	location: {
		x: { type: String },
		y: { type: String },
	},
});

export default mongoose.model("Game", GameSchema);
