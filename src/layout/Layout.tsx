import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import ShelfBtn from "../components/ShelfBtn/ShelfBtn";

const Layout = () => {
	const location = useLocation();

	console.log(location);
	const hideNav = location.pathname === "/";
	const hideShelfBtn = location.pathname === "/mybeershelf";

	return (
		<>
			<div className={`min-h-screen px-8 py-8 font-[RobotoSlab] ${!hideNav && "pb-35"} ${hideNav && "lg:py-0"}`}>
				<Outlet />
				{!hideShelfBtn && <ShelfBtn/>}
			</div>
			{!hideNav && <Nav />}
		</>
	);
};

export default Layout;
