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

GameSchema.virtual("scores", {
	ref: "Scores",
	localField: "_id",
	foreignField: "games",
})

GameSchema.virtual("targets", {
	ref: "Targets",
	localField: "_id",
	foreignField: "games",
})

GameSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Games", GameSchema);
