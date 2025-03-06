import { Outlet, useLocation } from "react-router-dom";

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
