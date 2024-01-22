import React, { useEffect } from "react";
import MenuCards from "../components/MenuCards";

const Menu = ({ setGame, games }) => {

	return (
		<div className="flex flex-col items-center text-center flex-1 gap-5 px-20">
			<h1 className="py-10 font-serif text-5xl font-bold underline dark:text-slate-100 text-slate-900 ">
				Games
			</h1>
			<div className="flex items-center justify-center gap-10 w-full">
				{Object.entries(games).map(([id, game], index) => {
					return (
						<MenuCards
							key={index}
							game={game}
							id={id}
							setGame={setGame}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
