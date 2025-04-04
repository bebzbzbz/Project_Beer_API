import { useParams } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";
import { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import LikeBtn from "../../components/LikeBtn/LikeBtn";
import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";

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
		<div className='flex flex-col md:flex md:items-center gap-10'>
			<img
				src={beer?.image_url}
				alt={beer?.name}
				className='rounded-3xl md:w-1/2'
			/>

			<div>
				<div className='font-medium my-10'>
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

				<div className='flex gap-8 items-center'>
					<ArrowBtn />
					<LikeBtn onLike={() => onLike(id)} isLiked={isLiked(beer?._id)} />
				</div>
			</div>
		</div>
	);
};

export default BeerDetails;
