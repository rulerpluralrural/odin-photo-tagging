import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./pages/Header";
import Leaderboard from "./pages/Leaderboard";
import Menu from "./pages/Menu";
import { useState } from "react";

function App() {
	const [game, setGame] = useState("")
	const [gameStart, setGameStart] = useState(false)
	const [timer, setTimer] = useState(0)

	return (
		<>
			<div className=" bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col">
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/menu" replace={true} />}
					></Route>
					<Route path="/menu" element={<Menu setGame={setGame} setGameStart={setGameStart}/>} />
					<Route path="/leaderboard" element={<Leaderboard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
