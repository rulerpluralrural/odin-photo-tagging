import React, { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Score from "../components/Leaderboard/Score";
import Header from "../components/Leaderboard/Header";

const headerStyle =
	"font-serif text-2xl font-bold text-center p-2 first-letter:text-red-600 first-letter:text-3xl";
const divStyle = "flex flex-col items-center justify-center";

const Leaderboard = () => {
	const [loading, setLoading] = useState(false);
	const [scores, setScores] = useState(null);
	const bearGameScores = scores?.filter((item) => {
		return item.games.name === "The Bear";
	});
	const ghostGameScores = scores?.filter((item) => {
		return item.games.name === "The Ghost";
	});
	const openRoadsGameScores = scores?.filter((item) => {
		return item.games.name === "Open Roads";
	});

	useEffect(() => {
		const getScores = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${import.meta.env.VITE_SERVER_URL}/api/v1/scores`
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

	// console.log(scores);

	if (loading || scores === null) {
		return (
			<div className="flex items-center justify-center">
				<MoonLoader color="white" size={100} />
			</div>
		);
	}

	return (
		<div className="flex flex-wrap items-start justify-around h-screen overflow-scroll">
			<div className={divStyle}>
				<h1 className={headerStyle}>The Bear</h1>
				<table>
					<Header />
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
				</table>
			</div>
			<div className={divStyle}>
				<h1 className={headerStyle}>The Ghost</h1>
				<table>
					<Header />
					{ghostGameScores.map((item, index) => {
						return (
							<Score
								key={index}
								username={item.username}
								time={item.time}
								date={item.date_formatted}
							/>
						);
					})}
				</table>
			</div>
			<div className={divStyle}>
				<h1 className={headerStyle}>Open Roads</h1>
				<table>
					<Header />
					{openRoadsGameScores.map((item, index) => {
						return (
							<Score
								key={index}
								username={item.username}
								time={item.time}
								date={item.date_formatted}
							/>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Leaderboard;
