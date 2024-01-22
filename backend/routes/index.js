import express from "express"
const router = express.Router()

import gameController from "../controllers/game.js"

// GET route for all games
router.get("/games", gameController.get_games)

// GET route for a single game
router.get("/games/:id", gameController.get_game)

// POST route for found target
router.post("/game/:id", gameController.target_post)

// POST route for score
router.post("/game/:id/score", gameController.post_score)

// GET route for all score
router.get("/scores", gameController.get_scores)

export default router