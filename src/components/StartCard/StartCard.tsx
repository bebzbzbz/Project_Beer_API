import { Link } from "react-router-dom";

//anlegen der Props für die Componenten übergreifende Verwendung auf der StartSeite
interface Props {
	imgName: string;
	linkName: string;
	linkTo: string;
}

// Beginn der Componente, welcher Props mitgegeben werden zur weiteren Verwendung.
const StartCard: React.FunctionComponent<Props> = ({
	imgName,
	linkName,
	linkTo,
}) => {
	// Rendern der StartKarte mit HTML und Tailwind.
	// in den {}-Klammern befinden sich die jeweiligen Props, damit die Component mehrfach verwendet werden kann.
	return (
		<>
			<div className='mx-8 my-10'>
				<div className="rounded-3xl overflow-hidden">
					<img
						src={`../../../public/${imgName}.svg`}
						alt='shelf full of alcohol bottles'
						className='w-screen object-contain
						'
					/>
					<Link to={linkTo} className='block w-full bg-amber-400 text-4xl text-white py-2 px-4 hover:bg-amber-500 transition-colors'>{linkName}</Link>
				</div>
				
				<p className='text-base mt-4 font-bold'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
					similique quos id quo explicabo ducimus perspiciatis exercitationem
					voluptatibus quae, consectetur nam modi sequi mollitia voluptatem!
					Magni consectetur exercitationem illo id?
				</p>
			</div>
		</>
	);
};

export default StartCard;
