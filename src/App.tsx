import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Start from "./pages/Start/Start";
import AllBeers from "./pages/AllBeers/AllBeers";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import NotFound from "./pages/NotFound/NotFound";
import MyBeerShelf from "./pages/MyBeerShelf/MyBeerShelf";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Start />} />
				<Route path='allbeers' element={<AllBeers />} />
				<Route path='allbeers/:id' element={<BeerDetails />} />
				<Route path='mybeershelf' element={<MyBeerShelf />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
