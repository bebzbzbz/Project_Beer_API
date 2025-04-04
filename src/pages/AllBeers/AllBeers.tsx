import { useEffect, useState } from "react";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";
import SingleCard from "../../components/SingleCard/SingleCard";

const AllBeers = () => {
	//useState zum speichern der geholten Daten
	const [beers, setBeers] = useState<IBeer[]>([]);

	// ! für die auflistung der gesamten Biere der API
	//UseEffet zum fetchen der API, damit diese nur wieder gefetched wird, sobald sich etwas im dependency verändert hat.
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
	//rendern der API-Daten über map, welche durch die Komponente SingleCard dargestellt wird.
	return (
		<>
			<div className="md:grid grid-cols-2 gap-5">
				{beers.map((beer: IBeer) => {
					return <SingleCard beer={beer} key={beer._id} />;
				})}
			</div>
		</>
	);
};

export default AllBeers;
