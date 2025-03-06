import { Link } from "react-router-dom";
import { IBeer } from "../../interfaces/IBeer";

interface BeerProps {
	beer: IBeer;
}

const SingleCard = ({ beer }: BeerProps) => {
	return (
		<div
			className='flex ml-8 mr-10
		  items-center gap-8 py-10 border-b-1'
		>
			<div className='w-1/2'>
				<img
					src={beer.image_url}
					alt={`Image form ${beer.name}`}
					className=''
				/>
			</div>
			<div>
				<h1 className='text-3xl text-wrap'>{beer.name}</h1>
				<p className='text-lg text-wrap text-amber-300 font-black'>
					{beer.tagline}
				</p>
				<p className='text-base my-5'>Created by: {beer.name}</p>
				<Link
					to={`/allbeers/${beer._id}`}
					className='bg-amber-300 rounded-3xl text-white font-medium py-2 px-6'
				>
					Details
				</Link>
			</div>
		</div>
	);
};

export default SingleCard;
