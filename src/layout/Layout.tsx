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
			<div className='px-10 pt-10 pb-35 font-[RobotoSlab]'>
				<Outlet />
				{!hideShelfBtn && <ShelfBtn/>}
			</div>
			{!hideNav && <Nav />}
		</>
	);
};

export default Layout;
