import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = ({ setGameStart }) => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center px-8 py-5 font-serif font-semibold text-2xl">
			<Logo navigate={navigate} setGameStart={setGameStart} />
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

const Logo = ({ navigate, setGameStart }) => {
	return (
		<>
			<button
				className="flex items-center tracking-wider"
				onClick={() => {
					navigate("/");
					setGameStart(false);
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
