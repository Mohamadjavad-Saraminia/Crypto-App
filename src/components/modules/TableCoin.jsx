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

                {/* به جای ایجاد یک component مجزا اومدیم پایین منطق کد رو نوشتیم و درون خود پیچ نوشتیمش */}
                <tbody>
                    {coins.map(coins =>
                        <TabelRow coins={coins} key={coins.id} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableCoin

// destructure coins
// یک component دیگه درون tabelcoins به نام Tabelrowساختیم تا از تکرار جلوگیری کنیم
const TabelRow = ({ coins: { id, name, image, symbol, total_volume, current_price, price_change_percentage_24h: price_change }, }) => {
    return (
        <tr key={id}>
            <td>
                <div>
                    <img src={image} alt="alt" />
                    <span>{symbol.toUpperCase()}</span>
                    {/* symbol be horoofe bozorg */}
                </div>
            </td>
            <td>{name}</td>
            {/* قیمت جاری - toLocaleString() میاد 3رقم 3رقم جدا میکنه اعداد رو */}
            <td>${current_price.toLocaleString()}</td>
            {/* price-change  درصد تغییرات | toFixed(2) یعنی تا 2 رقم اعشار نشون بده*/}
            <td>{price_change.toFixed(2)}%</td>
            <td>{total_volume.toLocaleString()}</td>
            {/* Chart + or - ro moshakhas kardim */}
            <td> <img src={price_change > 0 ? chartUp : chartDown} alt={name} /></td>
        </tr>
    )
}