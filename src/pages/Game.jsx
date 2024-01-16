import React from "react";

const Game = ({ game }) => {

	return (
		<div className="flex items-center justify-center">
			<img src={game.imgURL} alt={`${game.name} image`} className="rounded-md cursor-crosshair" draggable="false"/>
		</div>
	);
};

export default Game;
