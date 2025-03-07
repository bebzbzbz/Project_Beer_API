import { Link } from "react-router-dom";

const Nav = () => {
    return (  
        <nav className="w-full bg-amber-400 text-center p-2 fixed bottom-0">
            <Link to="/" className="inline-block bg-white rounded-full p-2">
                <img src="/logo.svg" alt="Two beer pints clicking together" className="hover:scale-110 transition-all" />
            </Link>
        </nav>
    );
}

export default Nav;