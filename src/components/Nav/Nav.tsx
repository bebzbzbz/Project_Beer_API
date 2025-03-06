import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <nav className="w-full bg-amber-300 text-center p-2 fixed bottom-0">
            <Link to="/" className="inline-block bg-white rounded-full p-2">
                <img src="/logo.svg" alt="Two beer pints clicking together" />
            </Link>
        </nav>
    );
}

export default Footer;