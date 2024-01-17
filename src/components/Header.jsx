import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import TargetChar from "./TargetChar";

const Header = ({ setGameStart, game, setGame, timer, setTimer }) => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center px-8 py-5 font-serif font-semibold text-2xl">
			<Logo navigate={navigate} setGameStart={setGameStart} setGame={setGame} />
			{game && (
				<div className="flex items-baseline justify-center gap-5">
					<p className="text-red-600">Find:</p>
					{game.images?.map((item, index) => {
						return <TargetChar key={index} url={item.url} name={item.name} />;
					})}
				</div>
			)}
			<div className="flex items-center justify-around w-[200px]">
				<LeaderboardButton />
				<a
					href="https://github.com/rulerpluralrural/odin-photo-tagging"
					target="_blank"
					className="text-2xl"
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

const Logo = ({ navigate, setGameStart, setGame }) => {
	return (
		<>
			<button
				className="flex items-center tracking-wider"
				onClick={() => {
					navigate("/");
					setGameStart(false);
					setGame("")
				}}
			>
				<p>Seek</p>
				<p className="text-red-900 dark:text-red-600 ">Game</p>
			</button>
		</>
	);
};

const LeaderboardButton = () => {
	return (
		<>
			<Link to="/leaderboard">Leaderboard</Link>
		</>
	);
};

export default Header;
