import { useEffect, useState } from "react";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";
import SingleCard from "../../components/SingleCard/SingleCard";

const AllBeers = () => {
	const [beers, setBeers] = useState<IBeer[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			console.log(response.data);
			setBeers(response.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<div>
				{beers.map((beer: IBeer) => {
					return <SingleCard beer={beer} key={beer._id} />;
				})}
			</div>
		</>
	);
};

export default AllBeers;
