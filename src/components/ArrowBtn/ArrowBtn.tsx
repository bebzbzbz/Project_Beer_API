import { Link } from "react-router-dom";

const ArrowBtn = () => {
    return (  
        <Link
            to='/allbeers'
            className='inline-block bg-amber-400 rounded-full p-2 self-start hover:scale-110 hover:bg-amber-500 transition-all'
            title="Back to Beer Overview"
        >
            <img src='/arrow.svg' alt='Arrow back' />
        </Link>
    );
}

export default ArrowBtn;