import { Link, useParams } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";
import { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";

// interface BeerDetailsProps {
// 	beer: IBeer;
// }

const BeerDetails = () => {
	const { id } = useParams();
	const [beer, setBeer] = useState<IBeer>();

	//anwenden der eigneen hook
	//likes ist array mit den ids der gelikeden bieren
	const { isLiked, onLike } = useLocalStorage();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/${id}`
			);
			setBeer(response.data);
		};
		fetchData();
	}, []);

	return (
		<div className='flex flex-col gap-10'>
			<img src={beer?.image_url} alt={beer?.name} />

			<div className='font-medium'>
				<h1 className='text-5xl mb-2'>{beer?.name}</h1>
				<h2 className='text-lg font-black text-amber-400 mb-5'>
					{beer?.tagline}
				</h2>
				<ul className='text-sm text-gray-500 mb-2'>
					<li className='flex justify-between'>
						<p>First brewed:</p>
						<p>{beer?.first_brewed}</p>
					</li>
					<li className='flex justify-between'>
						<p>Attenuation level:</p>
						<p>{beer?.attenuation_level}</p>
					</li>
				</ul>
				<p>{beer?.description}</p>
			</div>

			{/* hier noch ein Button zum Liken */}
			<button onClick={() => onLike(id)}>
				{isLiked(beer?._id) ? "dont like anymore" : "like"}
			</button>

			<Link
				to='/allbeers'
				className='inline-block bg-amber-400 rounded-full p-2 self-start hover:scale-110 hover:bg-amber-500 transition-all'
			>
				<img src='/arrow.svg' alt='Arrow back' />
			</Link>
		</div>
	);
};

export default BeerDetails;
