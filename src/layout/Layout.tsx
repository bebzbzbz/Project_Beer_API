import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Layout = () => {
	const loation = useLocation();

	console.log(loation);
	const hideNav = loation.pathname === "/";

	return (
		<>
			<div>
				<Outlet />
				{!hideNav && <Nav />}
			</div>
		</>
	);
};

export default Layout;
