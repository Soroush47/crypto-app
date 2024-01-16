import { marketChart } from "../services/cryptoApi";

const getChart = async (
    // coin: { id, name, image, symbol, price, ath, market_cap },
    id,
    vsCurrency
    // setChart,
) => {
    // setChart(chart => ({ ...chart, chartData: "loading" }));

    try {
        const res = await fetch(marketChart(id, vsCurrency));
        const json = await res.json();
        return json;
        // setChart({
        //     coin: { name, image, symbol, price, ath, market_cap },
        //     chartData: json,
        // });
    } catch (err) {
        console.log(err.message);
        // setChart(chart => ({ ...chart, chartData: "loading" }));
        return "loading";
    }
};

export { getChart };
