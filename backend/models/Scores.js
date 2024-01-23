import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ScoreSchema = new Schema(
	{
		username: {
			type: String,
		},
		time: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Scores", ScoreSchema);
