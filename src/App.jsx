import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./pages/Header";
import Leaderboard from "./pages/Leaderboard";
import Menu from "./pages/Menu";

function App() {
	return (
		<>
			<div className=" bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 h-screen">
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/menu" replace={true} />}
					></Route>
					<Route path="/menu" element={<Menu />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
