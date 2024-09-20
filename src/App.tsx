import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";
import GalleryPage from "./pages/GalleryPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contents" element={<ContentPage />} />
				<Route path="/details" element={<DetailPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
