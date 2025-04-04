import { Link } from "react-router-dom";

//anlegen der Props für die Componenten übergreifende Verwendung auf der StartSeite
interface Props {
	imgName: string;
	linkName: string;
	linkTo: string;
	title: string;
}

// Beginn der Componente, welcher Props mitgegeben werden zur weiteren Verwendung.
const StartCard: React.FunctionComponent<Props> = ({
	imgName,
	linkName,
	linkTo,
	title
}) => {
	// Rendern der StartKarte mit HTML und Tailwind.
	// in den {}-Klammern befinden sich die jeweiligen Props, damit die Component mehrfach verwendet werden kann.
	return (
		<>
			<Link to={linkTo} className="bg-amber-400 hover:bg-amber-500 transition-colors rounded-3xl overflow-hidden w-full" title={title}>
				<div className="relative">
					<img
						src={`/${imgName}.svg`}
						alt='shelf full of alcohol bottles'
						className='w-full object-contain'
					/>
					<div className="bg-amber-500 opacity-30 absolute top-0 left-0 right-0 bottom-0 hover:opacity-0 transition"></div>
				</div>
				<p className='block w-full text-4xl text-white py-2 px-4'>{linkName}</p>
			</Link>
			
		</>
	);
};

export default StartCard;
