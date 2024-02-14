import { useState } from "react";
import { useEffect } from "react"
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../Services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function Homepage() {
    // [] yaeni onmounting
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("usd");

    useEffect(
        () => {
            //perpage= 20 page 2 | 20 ta 20ta Get mikone az Server | Page 1 ro ham get mikonim 
            //getCoinList For Manage Apis
            setIsLoading(true);
            const getData = async () => {
                try {
                    const res = await fetch(getCoinList(page, currency));
                    const json = await res.json();
                    setCoins(json);
                    setIsLoading(false);
                    //ta vaghti update shod betoonim tagirat Eemal konim
                } catch (error) {
                    console.log(error);

                }
            }
            getData();
        }, [page, currency]);
    return (

        <div>

            <Search currency={currency} setCurrency={setCurrency} />
            {/* Props midim state ro be TabelCoin - Ta ounja namayesh bedimesh */}
            <TableCoin coins={coins} isLoading={isLoading} />
            {/* واسه اینکه pagination پایین نشون داده بشه */}
            <Pagination page={page} setPage={setPage} />

        </div>

    )
}

export default Homepage