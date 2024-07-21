import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import styles from "./Chart.module.css";
import { convertData } from "../../helpers/convertData";

import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function Chart({
    chart: {
        coin: { name, image, symbol, price, ath, market_cap },
        chartData,
    },
    setChart,
    vsCurrency,
}) {
    const [type, setType] = useState("prices");

    let currencySign = "$";

    switch (vsCurrency) {
        case "eur":
            currencySign = "€";
            break;
        case "jpy":
            currencySign = "¥";
            break;
    }

    let coin = {
        name: "",
        image: "",
        symbol: "",
        price: "",
        ath: "",
        market_cap: "",
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.close}
                onClick={() => setChart({ coin, chartData: "" })}
            >
                X
            </button>
            {chartData === "loading" ? (
                <div className={styles.loading}>
                    <RotatingLines strokeColor="#007c74" strokeWidth="3" />
                </div>
            ) : (
                <div className={styles.items}>
                    <div className={styles.coin}>
                        <img src={image} alt={symbol} />
                        <span>{name}</span>
                    </div>
                    <ResponsiveContainer width="100%" height="60%">
                        <LineChart
                            width="max-content"
                            height="300px"
                            data={convertData(chartData[type], type)}
                            margin={{ left: 60 }}
                        >
                            <CartesianGrid stroke="#3a3a3a" strokeWidth="2px" />
                            <XAxis dataKey="date" hide />
                            <YAxis domain={["auto", "auto"]} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#f4f5e4",
                                    borderRadius: "5px",
                                    height: "70px",
                                    width: "250px",
                                    color: "black",
                                }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey={type} stroke="#02b4a8" />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className={styles.buttons}>
                        <button
                            className={
                                type === "prices" ? styles.selected : styles.unSelected
                            }
                            value="prices"
                            onClick={e => setType(e.target.value)}
                        >
                            Prices
                        </button>
                        <button
                            className={
                                type === "market_caps"
                                    ? styles.selected
                                    : styles.unSelected
                            }
                            value="market_caps"
                            onClick={e => setType(e.target.value)}
                        >
                            Market Caps
                        </button>
                        <button
                            className={
                                type === "total_volumes"
                                    ? styles.selected
                                    : styles.unSelected
                            }
                            value="total_volumes"
                            onClick={e => setType(e.target.value)}
                        >
                            Total Volumes
                        </button>
                    </div>
                    <div className={styles.details}>
                        <p>
                            Price:{" "}
                            <span>
                                {currencySign}
                                {price.toLocaleString()}
                            </span>
                        </p>
                        <p>
                            ATH:{" "}
                            <span>
                                {currencySign}
                                {ath.toLocaleString()}
                            </span>
                        </p>
                        <p>
                            Market Cap:{" "}
                            <span>
                                {currencySign}
                                {market_cap.toLocaleString()}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chart;
