import { Ghost } from "react-kawaii";

const NotFound = () => {
	return (
		<>
			<div className=' flex flex-col items-center justify-center text-9xl text-amber-300  px-9 '>
				<h1>Ohhhh Nooooo</h1>
				<div className='flex items-center'>
					<Ghost size={400} mood='ko' color='#fccb7e' />
					<Ghost size={200} mood='ko' color='#fccb7e' />
					<Ghost size={400} mood='ko' color='#fccb7e' />
				</div>

				<p className='text-center'>Kein Bier für dich!!</p>
			</div>
		</>
	);
};

export default NotFound;
