import React from "react";

const MenuCards = ({ game, setGame, setGameStart }) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-2xl first-letter:font-serif first-letter:text-red-700 dark:first-letter:text-red-500 first-letter:font-bold first-letter:text-3xl">{game.name}</p>
			<img src={game.imgURL} alt={`${game.imgURL} image`} className="w-[350px] aspect-square object-cover rounded-md"/>
			<button type="button" className="bg-green-700 text-slate-100 font-semibold px-3 py-2 w-full rounded-md text-xl hover:animate-pulse focus:animate-pulse" onClick={() => {
				setGame(game)
				setGameStart(true)
			}}>Start</button>
		</div>
	);
};

export default MenuCards;
