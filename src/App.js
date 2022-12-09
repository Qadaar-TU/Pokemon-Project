import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import TypePage from "./pages/TypePage";
import FilterResultPage from "./pages/FilterResultPage";

function App() {
	return (
		<div className="App">
			<div className="tablet">
				<div className="content">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/details/:id" element={<DetailsPage />}></Route>
							<Route path="/types" element={<TypePage />}></Route>
							<Route path="/filtered" element={<FilterResultPage />}></Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}

export default App;
