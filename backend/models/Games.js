import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
	name: {
		type: String,
	},
	imgURL: {
		type: String,
	},
});

export default mongoose.model("Games", GameSchema);
