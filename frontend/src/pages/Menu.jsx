import React, { useEffect, useState } from "react";
import MenuCards from "../components/MenuCards";
import MoonLoader from "react-spinners/MoonLoader";

const Menu = () => {
	const [loading, setLoading] = useState(false);
	const [games, setGames] = useState(null);

	useEffect(() => {
		const getGames = async () => {
			setLoading(true);
			try {
				const response = await fetch("http://localhost:5000/api/v1/games").then(
					(res) => res.json()
				);
				setGames(response.games);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		getGames();
	}, []);

	return (
		<div className="flex flex-col items-center text-center flex-1 gap-5 px-20">
			<h1 className="py-10 font-serif text-5xl font-bold underline dark:text-slate-100 text-slate-900 ">
				Games
			</h1>
			{loading || games === null ? (
				<MoonLoader color="white" size={100} />
			) : (
				<div className="flex items-center flex-wrap justify-center gap-10 w-full">
					{games.map(({ name, imgURL, id }, index) => {
						return (
							<MenuCards key={index} name={name} imgURL={imgURL} id={id} />
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Menu;
