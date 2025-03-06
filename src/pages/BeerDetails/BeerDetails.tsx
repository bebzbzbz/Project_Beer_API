import { useParams } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";
import { useEffect, useState } from "react";
import axios from "axios";

interface BeerProps {
	beer: IBeer;
}

const BeerDetails = () => {
	const { id } = useParams();
	const [beer, setBeer] = useState<IBeer>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/${id}`
			);
			setBeer(response.data);
		};
		fetchData();
	}, []);

	console.log(beer);

	return (
		<>
			<p>style der seite oder karte {beer?.name}</p>
		</>
	);
};

export default BeerDetails;
