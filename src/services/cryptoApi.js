const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-uAfSh4Gw2uspfGSdGBTJavKe";

const getCoinsList = (vsCurrency, page) =>
    `${BASE_URL}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchCoins = query =>
    `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = (id, vsCurrency) =>
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=7&x_cg_demo_api_key=${API_KEY}`;

const getCoin = (id, vsCurrency) =>
    `${BASE_URL}/coins/markets?vs_currency=${vsCurrency}&ids=${id}&x_cg_demo_api_key=${API_KEY}`;

export { getCoinsList, searchCoins, marketChart, getCoin };
