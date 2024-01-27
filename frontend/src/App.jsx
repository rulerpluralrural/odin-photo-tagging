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

	return (
		<>
			<div className=" bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 h-screen overflow-scroll flex flex-col">
				<Header setGameStart={setGameStart}/>
				<div className="flex-1 py-10">
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/menu" replace={true} />}
						></Route>
						<Route
							path="/menu"
							element={<Menu games={games} />}
						/>
						<Route
							path="/game/:gameID"
							element={
								<Game setGameStart={setGameStart} gameStart={gameStart} />
							}
						/>
						<Route path="/leaderboard" element={<Leaderboard />} />
					</Routes>
				</div>
				<ToastContainer
					position="top-center"
					newestOnTop={true}
					closeOnClick={true}
					pauseOnHover={true}
					draggable={false}
					theme="colored"
				/>
			</div>
		</>
	);
}

export default App;
