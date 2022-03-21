import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Score } from "./Score/Score";
import { Quiz } from "./Quiz/Quiz";
import { useState, createContext } from "react";

export const ScoreContext = createContext();

function App() {
	const [score, setScore] = useState();

	return (
		<div>
			<ScoreContext.Provider value={score}>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/score" element={<Score />} />
					</Routes>
				</BrowserRouter>
			</ScoreContext.Provider>
		</div>
	);
}

export default App;
