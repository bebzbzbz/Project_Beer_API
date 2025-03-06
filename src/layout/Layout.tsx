import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Layout = () => {
	const loation = useLocation();

	console.log(loation);
	const hideNav = loation.pathname === "/";

	return (
		<>
			<div className="px-10 pt-10 pb-35">
				<Outlet />
			</div>
			{!hideNav && <Nav />}
		</>
	);
};

export default Layout;
