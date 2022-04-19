import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/page/Mainpage";
import RingLoader from "react-spinners/RingLoader";
import Works from "./components/works/Works";

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader">
					<RingLoader color={"#49AE5F"} loading={loading} size={50} />
				</div>
			) : (
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Mainpage />} />
					</Routes>
					<Routes>
						<Route path="/blog" element={<Works />} />
					</Routes>
					<Routes>
						<Route path="/works" element={<Works />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
