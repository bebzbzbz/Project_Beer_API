import { useEffect, useState } from "react";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";
import ShelfBeerSingle from "../../components/ShelfBeerSingle/ShelfBeerSingle";
import useLocalStorage from "../../hooks/useLocalStorage";
import ArrowBtn from "../../components/ArrowBtn/ArrowBtn";

const MyBeerShelf = () => {
    const [beers, setBeers] = useState<IBeer[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			console.log(response.data);
			setBeers(response.data);
		};
		fetchData();
	}, []);
    
    const { isLiked } = useLocalStorage();
    
    const favedBeers = beers.filter((beer: IBeer) => isLiked(beer._id))

    return (  
        <>
            <div className="flex gap-4 mb-10">
                <h1 className="text-3xl">My Beer Shelf</h1>
                <img src="/beer-full.png" alt="Full beer glass" className="h-10"/>
            </div>
            <section className="grid grid-cols-4 gap-5 mb-10">
                {favedBeers.map((beer: IBeer) => {
                    return <ShelfBeerSingle beer={beer} key={beer._id} />
                })}
            </section>
            <ArrowBtn/>
        </>
    );
}

export default MyBeerShelf;