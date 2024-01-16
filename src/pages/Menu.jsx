import React, { useEffect } from "react";
import MenuCards from "../components/MenuCards";
import { useNavigate } from "react-router-dom";

const Menu = ({ setGame, setGameStart, gameStart, game }) => {
	const navigate = useNavigate();
	const games = [
		{ name: "The Bear", imgURL: "/images/The Bear.png" },
		{ name: "The Ghost", imgURL: "/images/The Ghost.jpg" },
		{ name: "The Open Roads", imgURL: "/images/The Open Roads.jpg" },
	];

	useEffect(() => {
		if (gameStart) {
			navigate("/game");
		}
	}, [game]);

	return (
		<div className="flex flex-col items-center text-center flex-1 gap-5 px-20">
			<h1 className="py-10 font-serif text-5xl font-bold underline dark:text-slate-100 text-slate-900 ">
				Games
			</h1>
			<div className="flex items-center justify-center gap-10 w-full">
				{games.map((game, index) => {
					return (
						<MenuCards
							key={index}
							game={game}
							setGame={setGame}
							setGameStart={setGameStart}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
