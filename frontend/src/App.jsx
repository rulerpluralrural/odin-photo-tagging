import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Leaderboard from "./pages/Leaderboard";
import Menu from "./pages/Menu";
import Game from "./pages/Game";
import { useState } from "react";
import games from "./games_data.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [gameStart, setGameStart] = useState(false);
	const [time, setTime] = useState(0);

	const resetGame = async () => {
		await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/reset`, {
			method: "PUT",
			headers: {
				["Content-Type"]: "application/json; charset=utf-8",
			},
		});
		setGameStart(false);
		setTime(0);
	};

	return (
		<>
			<div className=" bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 h-screen overflow-scroll flex flex-col">
				<Header resetGame={resetGame} />
				<div className="flex-1 py-10">
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/menu" replace={true} />}
						></Route>
						<Route path="/menu" element={<Menu games={games} />} />
						<Route
							path="/game/:gameID"
							element={
								<Game
									setGameStart={setGameStart}
									gameStart={gameStart}
									time={time}
									setTime={setTime}
									resetGame={resetGame}
								/>
							}
						/>
						<Route path="/leaderboard" element={<Leaderboard />} />
					</Routes>
				</div>
				<ToastContainer
					position="top-center"
					closeOnClick={true}
					pauseOnHover={true}
					draggable={false}
					stacked={true}
					theme="colored"
				/>
			</div>
		</>
	);
}

export default App;
