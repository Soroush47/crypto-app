import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
// import { debounce, set } from "lodash";

import styles from "./Search.module.css";

import { getCoin, searchCoins } from "../../services/cryptoApi";
import { getChart } from "../../helpers/getChart";

function Search({ vsCurrency, setVsCurrency, setChart }) {
    const [text, setText] = useState("");
    const [searchedCoins, setSearchedCoins] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controler = new AbortController();
        setSearchedCoins([{}]);

        const search = async () => {
            try {
                console.log("is fetching");
                const res = await fetch(searchCoins(text), { signal: controler.signal });
                const json = await res.json();
                setSearchedCoins(json.coins);
                setIsLoading(false);
            } catch (err) {
                err.name !== "AbortError" && alert(err.message);
            }
        };

        // const search = debounce(async () => {
        //     try {
        //         console.log("is fetching");
        //         setIsLoading(true);
        //         const res = await fetch(searchCoins(text), { signal: controler.signal });
        //         const json = await res.json();
        //         console.log(text);
        //         setIsLoading(false);
        //     } catch (err) {
        //         err.name !== "AbortError" && alert(err.message);
        //     }
        // }, 2000);

        const timeOut =
            text &&
            !setIsLoading(true) &&
            setTimeout(() => {
                search();
            }, 1000);

        // text && search();

        return () => {
            controler.abort();
            timeOut && clearTimeout(timeOut);
        };
    }, [text]);

    const showChart = async id => {
        let coin = {
            name: "",
            image: "",
            symbol: "",
            price: "",
            ath: "",
            market_cap: "",
        };

        setChart({ coin, chartData: "loading" });

        try {
            const res = await fetch(getCoin(id, vsCurrency));
            const json = await res.json();

            const {
                name,
                image,
                symbol,
                current_price: price,
                ath,
                market_cap,
            } = json[0];

            coin = { name, image, symbol, price, ath, market_cap };
        } catch (err) {
            console.log(err.message);
        }

        const chart = await getChart(id, vsCurrency);

        setChart({ coin, chartData: chart });
    };

    return (
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    placeholder="Search"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <select value={vsCurrency} onChange={e => setVsCurrency(e.target.value)}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="jpy">JPY</option>
                </select>
            </div>
            {text && !!searchedCoins.length && (
                <div className={styles.result}>
                    {isLoading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                height: "100px",
                            }}
                        >
                            <RotatingLines
                                strokeColor="#007c74"
                                strokeWidth="2"
                                width="45px"
                            />
                        </div>
                    ) : (
                        <ul>
                            {searchedCoins.map((coin, index) => (
                                <div key={index}>
                                    <li onClick={() => showChart(coin.id)}>
                                        <img src={coin.thumb} alt={coin.symbol} />
                                        {coin.name}
                                    </li>
                                    {index + 1 !== searchedCoins.length && <hr />}
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
}

export default Search;
