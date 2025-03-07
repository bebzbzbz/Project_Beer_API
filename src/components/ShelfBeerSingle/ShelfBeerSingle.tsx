import { Link } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";

interface ShelfBeerSingleProps {
    beer: IBeer;
}

const ShelfBeerSingle = ({beer} : ShelfBeerSingleProps) => {
    return (  
        <Link to={`/allbeers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} className="hover:rotate-5 transition-transform"/>
        </Link>
    );
}

export default ShelfBeerSingle;