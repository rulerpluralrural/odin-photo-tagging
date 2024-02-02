import React from "react";

const Score = ({ username, time, date }) => {
	return (
		<tbody className="text-center">
			<tr>
				<td>{username}</td>
				<td>
					<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
					<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
					<span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
				</td>
				<td>{date}</td>
			</tr>
		</tbody>
	);
};

export default Score;
