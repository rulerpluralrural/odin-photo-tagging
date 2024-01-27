import dotenv from "dotenv";
dotenv.config();

import express from "express";
import indexRouter from "./routes/index.js";
import connectDB from "./config/database.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: ["http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);

// Routes
app.get("/", (req, res) => {
	res.redirect("/api/v1/games");
});
app.use("/api/v1", indexRouter);

const PORT = process.env.PORT || 8000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log(`App is connected to the database...`);

		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
