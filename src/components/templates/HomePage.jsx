import { useState } from "react";
import { useEffect } from "react"
import TableCoin from "../modules/TableCoin";

function Homepage() {
    const [coins, setCoins] = useState([]);

    useEffect(
        () => {
            //perpage= 20 page 2 | 20 ta 20ta Get mikone az Server | Page 1 ro ham get mikonim 
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-NamGVyhcnb2h2SmrvPgLyKry")
                .then((res) => res.json())
                .then((json) => setCoins(json));
        }, []);
    return (

        <div>
            {/* Props midim state ro be TabelCoin - Ta ounja namayesh bedimesh */}

            <TableCoin coins={coins} />

        </div>

    )
}

export default Homepage