import React, { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Score from "../components/Score";

const Leaderboard = () => {
	const [loading, setLoading] = useState(false);
	const [scores, setScores] = useState(null);
	const bearGameScores = scores?.filter((item) => {
		return item.games.name === "The Bear";
	});
	console.log(bearGameScores);

	useEffect(() => {
		const getScores = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					"http://localhost:5000/api/v1/scores"
				).then((res) => res.json());

				console.log(response);
				setLoading(false);
				setScores(response.scores);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		getScores();
	}, []);

	console.log(scores);

	if (loading || scores === null) {
		return (
			<div className="flex items-center justify-center">
				<MoonLoader color="white" size={100} />
			</div>
		);
	}

	return (
		<div className="flex justify-around items-center">
			<div className="w-[350px]">
				<h1 className="font-serif text-2xl font-bold text-center p-2 first-letter:text-red-600 first-letter:text-3xl">
					The Bear
				</h1>
				<div className="w-full flex justify-between font-xl font-bold">
					<h1 className="underline">Username</h1>
					<h1 className="underline">Time</h1>
					<h1 className="underline">Submitted</h1>
				</div>
				{bearGameScores.map((item, index) => {
					return (
						<Score
							key={index}
							username={item.username}
							time={item.time}
							date={item.date_formatted}
						/>
					);
				})}
			</div>
			<div>
				<h1>The Ghost</h1>
			</div>
			<div>
				<h1>Open Roads</h1>
			</div>
		</div>
	);
};

export default Leaderboard;
