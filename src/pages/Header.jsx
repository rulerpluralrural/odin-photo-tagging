import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-8 py-5 font-serif font-semibold text-xl">
			<Logo />
			<div className="flex items-center justify-around w-[200px]">
				<LeaderboardButton />
				<a href="#" className="text-2xl">
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

const Logo = () => {
	return (
		<>
			<button className="flex items-center tracking-wider">
				<p>Seek</p>
				<p className="text-red-900 dark:text-red-600 ">Game</p>
			</button>
		</>
	);
};

const LeaderboardButton = () => {
	return (
		<>
			<a href="#">Leaderboard</a>
		</>
	);
};

export default Header;
