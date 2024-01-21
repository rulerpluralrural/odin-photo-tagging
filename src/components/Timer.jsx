import React, { useEffect, useState } from "react";

const Timer = ({ game, gameStart }) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;
        
		if (game && gameStart === true) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [game]);

	return (
		<div className="flex items-center justify-center gap-2">
			<p className="text-red-600 font-bold text-2xl">Timer:</p>
			<div className="text-2xl">
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + (time / 10) % 1000).slice(-2)}</span>
			</div>
		</div>
	);
};

export default Timer;
