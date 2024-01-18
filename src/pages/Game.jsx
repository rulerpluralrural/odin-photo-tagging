import React, { useState } from "react";
import PopUp from "../components/PopUp";

const Game = ({ game }) => {
	const [popUp, togglePopUp] = useState(false);
	const [popUpLocation, setPopUpLocation] = useState({
		x: "",
		y: "",
	});

	return (
		<div className="flex items-center justify-center">
			<div className="relative">
				<img
					src={game.imgURL}
					alt={`${game.name} image`}
					className="rounded-md cursor-crosshair"
					draggable="false"
					onClick={(e) => {
						const rect = e.target.getBoundingClientRect();
						const targetX = e.clientX - rect.left; //x position within the element.
						const targetY = e.clientY - rect.top; //y position within the element.

						console.log(rect);
						console.log(e.clientX, e.clientY);
						console.log(targetX, targetY);

						togglePopUp(!popUp);
						setPopUpLocation({
							x: targetX,
							y: targetY,
						});
					}}
				/>
				{popUp && <PopUp game={game} popUpLocation={popUpLocation} />}
			</div>
		</div>
	);
};

export default Game;