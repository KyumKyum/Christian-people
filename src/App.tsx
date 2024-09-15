import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contents" element={<ContentPage />} />
				<Route path="/detail" element={<DetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
