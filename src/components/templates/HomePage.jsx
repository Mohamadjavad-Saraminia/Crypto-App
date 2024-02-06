import { useState } from "react";
import { useEffect } from "react"
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../Services/cryptoApi";
import Pagination from "../modules/Pagination";

function Homepage() {
    // [] yaeni onmounting
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            //perpage= 20 page 2 | 20 ta 20ta Get mikone az Server | Page 1 ro ham get mikonim 
            //getCoinList For Manage Apis
            const getData = async () => {
                const res = await fetch(getCoinList());
                const json = await res.json();
                setCoins(json);
                setIsLoading(false);
                //ta vaghti update shod betoonim tagirat Eemal konim
            }
            getData();
        }, []);
    return (

        <div>

            <Pagination />
            {/* Props midim state ro be TabelCoin - Ta ounja namayesh bedimesh */}
            <TableCoin coins={coins} isLoading={isLoading} />

        </div>

    )
}

export default Homepage