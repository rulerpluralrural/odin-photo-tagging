import Game from "../models/Game.js";
import Target from "../models/Targets.js";
import Score from "../models/Scores.js";
import asyncHandler from "express-async-handler";

export default {
	get_games: asyncHandler(async (req, res) => {
		res.send("Get game");
	}),

	get_game: asyncHandler(async (req, res) => {
		res.send("Get a single game");
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
