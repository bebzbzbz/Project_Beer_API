import { Ghost } from "react-kawaii";

const NotFound = () => {
	return (
		<section className='flex flex-col items-center justify-center text-5xl lg:text-8xl text-amber-300 text-center px-9'>
			<h1>Ohhhh Nooooo</h1>
			<div className='flex items-center w-full'>
				<Ghost size={400} mood='ko' color='#fccb7e' />
				<Ghost size={200} mood='ko' color='#fccb7e' />
				<Ghost size={400} mood='ko' color='#fccb7e' />
			</div>

			<p>Kein Bier für dich!!</p>
		</section>
	);
};

export default NotFound;
