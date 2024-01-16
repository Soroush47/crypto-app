import styles from "./CoinCard.module.css";

import svgInc from "../../assets/chart-up.svg";
import svgDec from "../../assets/chart-down.svg";
import { getChart } from "../../helpers/getChart";

function CoinCard({
    data: {
        id,
        name,
        image,
        symbol,
        current_price: price,
        price_change_percentage_24h: price_change,
        total_volume,
        ath,
        market_cap,
    },
    vsCurrency,
    setChart,
}) {
    const showChart = async () => {
        let coin = {
            name: "",
            image: "",
            symbol: "",
            price: "",
            ath: "",
            market_cap: "",
        };

        setChart({ coin, chartData: "loading" });

        const chart = await getChart(id, vsCurrency);

        chart !== "loading" && (coin = { name, image, symbol, price, ath, market_cap });

        setChart({ coin, chartData: chart });

        // ? setChart(chart => ({ ...chart, chartData: "loading" }))
        // : setChart({
        //       coin: { name, image, symbol, price, ath, market_cap },
        //       chartData: chart,
        //   });

        // const getData = async () => {
        //     try {
        //         const res = await fetch(marketChart(id, vsCurrency));
        //         const json = await res.json();
        //         // console.log(json["total_volumes"]);
        //         setChart({
        //             coin: { name, image, symbol, price, ath, market_cap },
        //             chartData: json,
        //         });
        //     } catch (err) {
        //         console.log(err.message);
        //         setChart(chart => ({ ...chart, chartData: "loading" }));
        //     }
        // };
        // getData();
    };

    const isInc = price_change >= 0;

    let currencySign = "$";

    switch (vsCurrency) {
        case "eur":
            currencySign = "€";
            break;
        case "jpy":
            currencySign = "¥";
            break;
    }

    return (
        <tr>
            <td>
                <div className={styles.coin}>
                    <img src={image} alt={"loading"} onClick={showChart} />
                    <span onClick={showChart}>{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{name}</td>
            <td>
                {currencySign}
                {Number.isInteger(price)
                    ? price.toLocaleString()
                    : price.toFixed(2).toLocaleString()}
            </td>
            <td
                style={{
                    color: isInc ? "#7fc281" : "#d6595b",
                }}
            >
                {Math.abs(price_change.toFixed(2)) + "%"}
            </td>
            <td>
                {currencySign}
                {total_volume.toLocaleString()}
            </td>
            <td>
                <img src={isInc ? svgInc : svgDec} />
            </td>
        </tr>
    );
}

export default CoinCard;
