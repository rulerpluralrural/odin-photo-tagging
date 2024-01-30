import express from "express"
const router = express.Router()

import gameController from "../controllers/game.js"

// GET route for all games
router.get("/games", gameController.get_games)

// PUT route for reseting targets
router.put("/games", gameController.put_games)

// GET route for a single game
router.get("/games/:id", gameController.get_game)

// PUT route for found target
router.put("/games/:id", gameController.target_put)

// POST route for score
router.post("/game/:id/score", gameController.post_score)

// GET route for all score
router.get("/scores", gameController.get_scores)

export default router