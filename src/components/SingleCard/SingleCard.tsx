import { Link } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";

interface BeerProps {
	beer: IBeer;
}

const SingleCard = ({ beer }: BeerProps) => {
	return (
		<>
			<p>Style{beer.name}</p>
			<Link to={`/allbeers/${beer._id}`}>Details</Link>
		</>
	);
};

export default SingleCard;
