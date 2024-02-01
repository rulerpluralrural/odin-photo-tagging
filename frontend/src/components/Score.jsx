import React from "react";

const Score = ({ username, time, date }) => {
	return (
		<div className="flex justify-between w-full">
			<p>{username}</p>{" "}
			<div>
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
			</div>
			<p>{date}</p>
		</div>
	);
};

export default Score;
