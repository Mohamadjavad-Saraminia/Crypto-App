import { useEffect, useState } from "react"
import { searchCoin } from "../../Services/cryptoApi";

function Search({ currency, setCurrency, }) {
    //آنچه که کاربر وارد میکند
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);
    //Logic Search and Get Search Api From Coingiecko Server
    useEffect(() => {

        //bara Abort kardan va handel kardane Memory Leak & Clinup
        const controler = new AbortController();

        if (!text) return;  // Bara inke To updating Faghat kaar kone
        const search = async () => {
            try {
                const res = await fetch(searchCoin(text), { signal: controler.signal });
                const json = await res.json();
                if (json.coins) { setCoins(json.coins) } else {
                    alert(json.status.error_message);
                };
            } catch (error) {
                if (error.name != "AbortError") {
                    alert(error.message)
                }

            }

        };
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
        </div>
    )
}

export default Search