import Games from "../models/Games.js";
import Targets from "../models/Targets.js";
import Scores from "../models/Scores.js";
import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import { check, validationResult } from "express-validator";
import CustomAPIError from "../errors/custom-api.js";

export default {
	get_games: asyncHandler(async (req, res) => {
		const games = await Games.find()
			.populate("scores")
			.populate("targets")
			.exec();

		if (!games) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: "There are no games!" });
		}

		res.status(StatusCodes.OK).json({ games });
	}),

	get_game: asyncHandler(async (req, res) => {
		const gameID = req.params.id;

		const game = await Games.findOne({ _id: gameID })
			.populate("scores")
			.populate("targets")
			.exec();

		if (!game) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: `There are no game with this id: ${gameID}` });
		}

		res.status(StatusCodes.OK).json({ game });
	}),

	target_put: asyncHandler(async (req, res) => {
		const targetID = req.params.id;
		let target = await Targets.findById(targetID);

		if (!target) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: `No target with this id: ${targetID}` });
		}

		if (target.found === true) {
			return;
		}

		if (
			Math.sqrt(
				Math.pow(target.location.x - req.body.x, 2) +
					Math.pow(target.location.y - req.body.y, 2)
			) <= 30
		) {
			target = await Targets.findByIdAndUpdate(
				targetID,
				{ found: true },
				{ new: true }
			);
		} else {
			target = await Targets.findByIdAndUpdate(
				targetID,
				{ found: false },
				{ new: true }
			);
		}

		res.status(StatusCodes.OK).json({ target });
	}),

	post_score: [
		check("username")
			.trim()
			.isLength({ min: 1 })
			.escape()
			.withMessage("Username is required!")
			.custom(async (value) => {
				const existingUsername = await Scores.findOne({ username: value });

				if (existingUsername) {
					throw new CustomAPIError(
						"Username already in use, Please enter a different one"
					);
				}
			}),
		check("time").isLength({ min: 1 }).withMessage("Time is required"),

		asyncHandler(async (req, res) => {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw new CustomAPIError(errors.array());
			}

			const scoreID = req.params.id;

			const score = new Scores({
				username: req.body.username,
				time: req.body.time,
				games: scoreID,
			});

			await score.save();

			res
				.status(StatusCodes.CREATED)
				.json({ msg: "Score submitted successfully!", success: true });
		}),
	],

	get_scores: asyncHandler(async (req, res) => {
		const scores = await Scores.find()
			.sort([["timestamps", "descending"]])
			.populate("games")
			.exec();

		if (!scores) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: "There are no scores!" });
		}

		res.status(StatusCodes.OK).json({ scores });
	}),

	targets_put: asyncHandler(async (req, res) => {
		await Targets.updateMany({ games: req.params.id }, { found: false });

		res.status(StatusCodes.OK).json({ msg: "Update successful!" });
	}),
};
