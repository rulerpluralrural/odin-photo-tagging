import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TargetSchema = new Schema({
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
	games: {
		type: Schema.Types.ObjectId,
		ref: "Games"
	}
});

export default mongoose.model("Targets", TargetSchema);
