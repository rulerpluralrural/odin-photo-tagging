import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Leaderboard from "./pages/Leaderboard";
import Menu from "./pages/Menu";
import Game from "./pages/Game";
import { useState } from "react";
import games from "./games_data.js";

function App() {
	const [game, setGame] = useState("");
	const [gameStart, setGameStart] = useState(false);
	const [timer, setTimer] = useState(0);

	return (
		<>
			<div className=" bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 h-screen overflow-scroll flex flex-col">
				<Header
					setGameStart={setGameStart}
					setGame={setGame}
					timer={timer}
					setTimer={setTimer}
					game={game}
				/>
				<div className="flex-1 py-10">
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/menu" replace={true} />}
						></Route>
						<Route
							path="/menu"
							element={
								<Menu
									setGame={setGame}
									setGameStart={setGameStart}
									gameStart={gameStart}
									game={game}
									games={games}
								/>
							}
						/>
						<Route path="/game" element={<Game game={game} />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
