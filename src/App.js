import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/page/Mainpage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainpage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
