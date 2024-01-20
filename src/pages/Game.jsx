import React, { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import { useParams } from "react-router-dom";
import TargetChar from "../components/TargetChar";
import games from "../games_data";
import Timer from "../components/Timer";

const Game = ({ setGameStart }) => {
	const { gameID } = useParams();
	const game = games[gameID];
	const [popUp, togglePopUp] = useState(false);
	const [popUpLocation, setPopUpLocation] = useState({
		x: "",
		y: "",
	});

	useEffect(() => {
		setGameStart(true);
	}, []);

	return (
		<div className="flex gap-6 items-center justify-center overflow-scroll">
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
						// console.log(rect);
						// console.log(e.clientX, e.clientY);
						// console.log(targetX, targetY);
						togglePopUp(true);
						setPopUpLocation({
							x: targetX,
							y: targetY,
						});
					}}
				/>
				{popUp && (
					<PopUp
						game={game}
						popUpLocation={popUpLocation}
						togglePopUp={togglePopUp}
					/>
				)}
			</div>
			<div className="self-start">
				<div className="flex flex-col items-center justify-center gap-5 bg-slate-400 bg-opacity-90 text-slate-900 rounded-md p-2">
					<p className="text-green-700 text-2xl font-bold underline">Find</p>
					{game.images.map((item, index) => {
						return <TargetChar key={index} url={item.url} name={item.name} />;
					})}
				</div>
			</div>
			<div className="self-start">
				<Timer game={game}/>
			</div>
		</div>
	);
};

export default Game;
