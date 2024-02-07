//In vase ine Api key || BaseUrl age Taghir kard Betoonim sarie Update Konim Code ro

//Parte Tekrarshavande o sabete link
const BASE_URL = "https://api.coingecko.com/api/v3";
//un parte link ke bahash limite coingecko bardashte mishe
const API_KEY = "CG-NamGVyhcnb2h2SmrvPgLyKry";

const getCoinList = (page) => {
    return (`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`)
};


export { getCoinList };