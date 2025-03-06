import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
	const loation = useLocation();

	console.log(loation);
	const hideFooter = loation.pathname === "/";

	return (
		<>
			<div>
				<Outlet />
				{!hideFooter && <Footer />}
			</div>
		</>
	);
};

export default Layout;
