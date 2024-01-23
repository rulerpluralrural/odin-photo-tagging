import Game from "../models/Game.js";
import Target from "../models/Targets.js";
import Score from "../models/Scores.js";
import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";

export default {
	get_games: asyncHandler(async (req, res) => {
		const games = await Game.find()
			.populate("scores")
			.populate("targets")
			.exec();

		if (!games) {
			res.status(StatusCodes.NOT_FOUND).json({ msg: "There are no games!" });
		}

		res.status(StatusCodes.OK).json({ games });
	}),

	get_game: asyncHandler(async (req, res) => {
		const gameID = req.params.id;

		const game = await Game.findOne({ id: gameID })
			.populate("scores")
			.populate("targets")
			.exec();

		if (!game) {
			res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: `There are no game with this id: ${gameID}` });
		}

		res.status(StatusCodes.OK).json({ game });
	}),

	target_post: asyncHandler(async (req, res) => {
		res.send("Post a target");
	}),

	post_score: asyncHandler(async (req, res) => {
		res.send("Post a score");
	}),

	get_scores: asyncHandler(async (req, res) => {
		res.send("Get all scores");
	}),
};
