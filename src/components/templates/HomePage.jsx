import { useState } from "react";
import { useEffect } from "react"
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../Services/cryptoApi";

function Homepage() {
    const [coins, setCoins] = useState([]);

    useEffect(
        () => {
            //perpage= 20 page 2 | 20 ta 20ta Get mikone az Server | Page 1 ro ham get mikonim 
            //getCoinList For Manage Apis
            const getData = async () => {
                const res = await fetch(getCoinList());
                const json = await res.json();
                setCoins(json);
            }
            getData();
        }, []);
    return (

        <div>
            {/* Props midim state ro be TabelCoin - Ta ounja namayesh bedimesh */}
            <TableCoin coins={coins} />

        </div>

    )
}

export default Homepage