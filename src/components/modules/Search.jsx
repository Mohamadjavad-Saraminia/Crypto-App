import { useEffect, useState } from "react"
import { searchCoin } from "../../Services/cryptoApi";

function Search({ currency, setCurrency, }) {
    //آنچه که کاربر وارد میکند
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);
    //Logic Search and Get Search Api From Coingiecko Server
    useEffect(() => {
        // Bara inke To updating Faghat kaar kone
        if (!text) return;

        const search = async () => {
            const res = await fetch(searchCoin(text));
            const json = await res.json();

            //choon mahdoodiat dare Coingecko | miyaym shart mizarim vase Req ferestadan
            if (json.coins) setCoins(json.coins);
        };
        search();
    }, [text])


    return (
        <div>
            <input type="text" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
        </div>
    )
}

export default Search