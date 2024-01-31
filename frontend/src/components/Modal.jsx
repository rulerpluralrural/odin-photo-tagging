import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const buttonStyle =
	"w-full bg-red-600 py-3 rounded-sm text-xl font-semibold hover:bg-red-700 focus:bg-red-700 transition-colors";

const Modal = ({ setGamesStart, time }) => {
	const navigate = useNavigate();
	const { gameID } = useParams();

	const handleMenuButton = async () => {
		try {
			await fetch(`http://localhost:5000/api/v1/games/${gameID}/reset`, {
				method: "PUT",
				headers: {
					["Content-Type"]: "application/json; charset=utf-8",
				},
			});
			navigate("/");
			setGamesStart(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLeaderboardsButton = async () => {
		try {
			await fetch(`http://localhost:5000/api/v1/games/${gameID}/reset`, {
				method: "PUT",
				headers: {
					["Content-Type"]: "application/json; charset=utf-8",
				},
			});
			navigate("/leaderboards");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-start justify-center mt-28 font-sans">
			<div className="flex flex-col justify-center items-center gap-1">
				<h1 className="text-4xl">You have found them all!</h1>
				<p className="text-2xl">
					Your time is{" "}
					<span className="text-green-500">
						<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
						<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
						<span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
					</span>
				</p>
				<button
					type="button"
					className={buttonStyle}
					onClick={handleMenuButton}
				>
					MENU
				</button>
				<button
					type="button"
					className={buttonStyle}
					onClick={handleLeaderboardsButton}
				>
					LEADERBOARDS
				</button>
			</div>
		</div>
	);
};

export default Modal;
