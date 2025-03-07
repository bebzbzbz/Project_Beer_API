import { Link } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";
import useLocalStorage from "../../hooks/useLocalStorage";
import LikeBtn from "../LikeBtn/LikeBtn";

interface BeerProps {
	beer: IBeer;
}
//Beginn der Componente mit BeerProps
const SingleCard = ({ beer }: BeerProps) => {
	//anwenden der eigenen hook
	//likes ist array mit den ids der gelikeden bieren
	const { isLiked, onLike } = useLocalStorage();
	//Rerndern der einzelnen Kartendarstellung mit HTML und Tailwind
	//über beer wird auf die Daten der APi zugegriffen
	return (
		<div
			className='sm:flex ml-8 mr-10
		  items-center gap-8 py-10 border-b-1 md:flex'
		>
			<div className='w-full md:w-1/2 '>
				<img
					src={beer.image_url}
					alt={`Image form ${beer.name}`}
					className='mb-4 md:mb-0'
				/>
			</div>
			<div>
				<h1 className='text-3xl text-wrap'>{beer.name}</h1>
				<p className='text-lg text-wrap text-amber-400 font-black'>
					{beer.tagline}
				</p>
				<p className='text-base my-5'>Created by: {beer.name}</p>
				<div className='flex gap-4 items-center'>
					<Link
						to={`/allbeers/${beer._id}`}
						className='bg-amber-400 rounded-3xl text-white font-medium py-2 px-6 hover:bg-amber-500 hover:scale-110 transition-all'
					>
						Details
					</Link>
					{/* hier noch ein Button zum Liken */}
					<LikeBtn
						onLike={() => onLike(beer._id)}
						isLiked={isLiked(beer?._id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
