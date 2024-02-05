import chartUp from "../../assets/chart-Up.svg"
import chartDown from "../../assets/chart-down.svg"

function TableCoin({ coins }) {
    console.log(coins);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total Volume</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {coins.map(coins =>

                        <tr key={coins.id}>

                            <td>
                                <div>
                                    <img src={coins.image} alt="alt" />
                                    <span>{coins.symbol.toUpperCase()}</span>
                                    {/* symbol be horoofe bozorg */}
                                </div>
                            </td>
                            <td>{coins.name}</td>
                            {/* قیمت جاری - toLocaleString() میاد 3رقم 3رقم جدا میکنه اعداد رو */}
                            <td>${coins.current_price.toLocaleString()}</td>
                            {/* price-change  درصد تغییرات | toFixed(2) یعنی تا 2 رقم اعشار نشون بده*/}
                            <td>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                            <td>{coins.total_volume.toLocaleString()}</td>
                            {/* Chart + or - ro moshakhas kardim */}
                            <td> <img src={coins.price_change_percentage_24h > 0 ? chartUp : chartDown} alt={coins.name} /></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )



}

export default TableCoin