import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import ShelfBtn from "../components/ShelfBtn/ShelfBtn";

const Layout = () => {
	const loation = useLocation();

	console.log(loation);
	const hideNav = loation.pathname === "/";
	const hideShelfBtn = loation.pathname === "/mybeershelf";

	return (
		<>
			<div className={`min-h-screen px-8 py-8 font-[RobotoSlab] ${!hideNav && "pb-35"}`}>
				<Outlet />
				{!hideShelfBtn && <ShelfBtn/>}
			</div>
			{!hideNav && <Nav />}
		</>
	);
};

export default Layout;
