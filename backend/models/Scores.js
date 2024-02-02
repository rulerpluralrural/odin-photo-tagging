import mongoose from "mongoose";
const Schema = mongoose.Schema;

import { DateTime } from "luxon";

const ScoreSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, "Username is required!"],
		},
		time: {
			type: Number,
			required: [true, "Time is required!"],
		},
		games: {
			type: Schema.Types.ObjectId,
			ref: "Games",
		},
	},
	{ timestamps: true }
);

ScoreSchema.virtual("date_formatted").get(function () {
	return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED);
});

ScoreSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Scores", ScoreSchema);
