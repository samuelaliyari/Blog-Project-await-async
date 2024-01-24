import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";

import Posts from "./pages/Posts";
import Admin from "./pages/Admin";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Posts />}
					/>
					<Route
						path='/admin'
						element={<Admin />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
