import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
	name: {
		type: String,
	},
	imgURL: {
		type: String,
	},
	scores: {
		type: Schema.Types.ObjectId,
		ref: "Scores",
	},
	targets: {
		type: Schema.Types.ObjectId,
		ref: "Targets",
	},
});

export default mongoose.model("Game", GameSchema);
