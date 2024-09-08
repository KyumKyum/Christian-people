import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contents" element={<ContentPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
