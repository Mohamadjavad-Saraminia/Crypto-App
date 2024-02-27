import { useEffect, useState } from "react"
import { searchCoin } from "../../Services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";

function Search({ currency, setCurrency, }) {
    //آنچه که کاربر وارد میکند
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);
    const [isloading, setIsloading] = useState(false);
    console.log(coins);
    //Logic Search and Get Search Api From Coingiecko Server
    useEffect(() => {

        //bara Abort kardan va handel kardane Memory Leak & Clinup
        const controler = new AbortController();
        // Bara inke To updating Faghat kaar kone
        setCoins([]);
        if (!text) {
            setIsloading(false);
            return;
        }

        const search = async () => {
            try {
                const res = await fetch(searchCoin(text), { signal: controler.signal });
                const json = await res.json();
                if (json.coins) {
                    //baed az inke data ro greft false mishe
                    setIsloading(false);
                    setCoins(json.coins)
                } else {
                    alert(json.status.error_message);
                };
            } catch (error) {
                if (error.name != "AbortError") {
                    alert(error.message)
                }
            }

        };
        // vaghti dfe avale true
        setIsloading(true);
        search();
        return () => controler.abort();
    }, [text])


    return (
        <div>
            <input type="text" placeholder="Search" value={text} onChange={e => setText(e.target.value)} />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            <div>
                <ul>
                    {isloading && <RotatingLines width="50px" height="50px" strokeWidth="3" strokeColor="#3874ff" />}
                    {coins.map(coin => <li key={coin.id}>
                        <img src={coin.thumb} alt={coin.name} />
                        <p>{coin.name}</p>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Search