import { useEffect, useState } from "react";
import StartCard from "../../components/StartCard/StartCard";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";

const Start = () => {
	const [beer, setBeer] = useState<IBeer>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers/random"
			);
			console.log(response.data);
			setBeer(response.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<StartCard imgName={"shelf"} linkName={"All Beers"} linkTo='/allbeers' />

			<StartCard
				imgName='glasses'
				linkName='Random Beer'
				linkTo={`/allbeers/${beer?._id}`}
			/>
		</>
	);
};

export default Start;
