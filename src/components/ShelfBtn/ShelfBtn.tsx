import { Link } from "react-router-dom";

const ShelfBtn = () => {
    return (  
        <Link to="mybeershelf" className="bg-amber-400 fixed top-20 -right-12 rotate-90 px-2 py-1 rounded-b-lg transition-colors hover:bg-amber-500 text-sm">
            MY BEER SHELF
        </Link>
    );
}

export default ShelfBtn;