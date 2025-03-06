import { useEffect, useState } from "react";
import { IBeer } from "../../interfaces/IBeer";
import axios from "axios";

const AllBeers = () => {
    const [beers, setBeers] = useState<IBeer[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            console.log(response.data)
            setBeers(response.data)
        }
        fetchData();
    }, [])

    return (  
        <>

        </>
    );
}

export default AllBeers;