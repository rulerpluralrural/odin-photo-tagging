import React, { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import { useParams } from "react-router-dom";
import TargetChar from "../components/TargetChar";
import Timer from "../components/Timer";
import MoonLoader from "react-spinners/MoonLoader";
import Modal from "../components/Modal";

const Game = ({ setGameStart, gameStart, time, setTime, resetGame }) => {
	const { gameID } = useParams();
	const [loading, setLoading] = useState(false);
	const [game, setGame] = useState(null);
	const [popUp, togglePopUp] = useState(false);
	const [popUpLocation, setPopUpLocation] = useState({
		x: "",
		y: "",
	});
	const [targets, setTargets] = useState(null);

	useEffect(() => {
		const getGame = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${import.meta.env.VITE_SERVER_URL}/api/v1/games/${gameID}`
				).then((res) => res.json());
				setGame(response.game);
				setTargets(response.game.targets);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};
		getGame();
		setGameStart(true);
		setTime(0);
	}, []);

	if (game === null || loading) {
		return (
			<div className="flex items-center justify-center">
				<MoonLoader color="white" size={100} />
			</div>
		);
	}

	if (targets.every((target) => target.found === true)) {
		return <Modal time={time} resetGame={resetGame} />;
	}

	return (
		<div className="flex flex-col-reverse lg:flex-row gap-6 items-center justify-center overflow-scroll">
			<div className="relative flex-shrink-0">
				<img
					src={game.imgURL}
					alt={`${game.name} image`}
					className="rounded-md cursor-crosshair"
					draggable="false"
					onClick={(e) => {
						const rect = e.target.getBoundingClientRect();
						const targetX = e.clientX - rect.left; //x position within the element.
						const targetY = e.clientY - rect.top; //y position within the element.
						togglePopUp(true);
						setPopUpLocation({
							x: targetX,
							y: targetY,
						});
					}}
				/>
				{popUp && (
					<PopUp
						targets={targets}
						popUpLocation={popUpLocation}
						togglePopUp={togglePopUp}
						setTargets={setTargets}
					/>
				)}
			</div>
			<div className="self-center lg:self-start flex-shrink-0">
				<div className="flex flex-row px-5 lg:px-1 lg:flex-col items-center justify-center gap-5 bg-slate-400 bg-opacity-90 text-slate-900 rounded-md p-2">
					<p className="text-green-700 text-2xl font-bold underline">Find</p>
					{targets.map((item, index) => {
						return (
							<TargetChar
								key={index}
								url={item.imgURL}
								name={item.name}
								found={item.found}
							/>
						);
					})}
				</div>
			</div>
			<div className="self-center lg:self-start">
				<Timer
					game={game}
					gameStart={gameStart}
					time={time}
					setTime={setTime}
				/>
			</div>
		</div>
	);
};

export default Game;
