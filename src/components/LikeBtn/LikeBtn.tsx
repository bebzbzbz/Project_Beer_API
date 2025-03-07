import { Link } from "react-router-dom";

interface LikeBtnProps {
    isLiked: boolean,
    onLike: () => void
}

const LikeBtn = ({isLiked, onLike}: LikeBtnProps) => {
    return (  
        <Link to="" onClick={onLike}>
            {isLiked 
                ? <img src="/beer-full.png" alt="Don't like anymore" className="h-10 hover:scale-110 transition-all hover:rotate-10"/>
                : <img src="/beer-empty.png" alt="Don't like anymore"
                className="h-10 hover:scale-110 transition-all hover:rotate-10" />}
		</Link>
    );
}

export default LikeBtn;