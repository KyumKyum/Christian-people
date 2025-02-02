import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";
import DetailPage from "./pages/DetailPage";
import GalleryPage from "./pages/GalleryPage";
import CreatorPage from "./pages/CreatorPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/creators" element={<CreatorPage/>} />
				<Route path="/contents" element={<ContentPage />} />
				<Route path="/details" element={<DetailPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
