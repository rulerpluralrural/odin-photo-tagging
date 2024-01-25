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
		games: {
			type: Schema.Types.ObjectId,
			ref: "Games"
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Scores", ScoreSchema);
