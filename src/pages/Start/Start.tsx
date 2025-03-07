//Sämtliche Importe welche nachfolgend verwendet werden.

import { useEffect, useState } from "react";
import StartCard from "../../components/StartCard/StartCard";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";

const Start = () => {
	//useState
	const [beer, setBeer] = useState<IBeer>();

	//useEffect: hier wird die API gefetched mit zunahme von axios, es ist eine async function dafür wird im weiteren Verlauf await benutzt
	useEffect(() => {
		const fetchData = async () => {
			//response gibt die gefetchten Inhalte an
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers/random"
			);
			//ausgabe in der Konsole, zur überprüfung ob und welche Daten in der Response gespeichert werden
			console.log(response.data);
			//bearbeiten des States
			setBeer(response.data);
		};
		//die funktion FetchData wird aufgerufen
		fetchData();
	}, []);

	return (
		<div className="md:flex">
			{/* Die Start Komponente wird jeweils für die dafür vorhergesehene Funktion aufgerufen mit den dazugehörigen Props, wie der BildName, der LinkName wo es beim drauf klicken weiter gehen soll und dem path-Namen */}
			<StartCard imgName={"shelf1"} linkName={"All Beers"} linkTo='/allbeers' />

			<StartCard
				imgName='glasses1'
				linkName='Random Beer'
				linkTo={`/allbeers/${beer?._id}`}
			/>
		</div>
	);
};

export default Start;
