import { useEffect, useState } from "react";

import CoinsTable from "../modules/CoinsTable";
import Pagination from "../modules/Pagination";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Search from "../modules/Search";

import { getCoinsList } from "../../services/cryptoApi";
import Chart from "../modules/Chart";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [vsCurrency, setVsCurrency] = useState("usd");
    const [loading, setLoading] = useState(true);
    const [chart, setChart] = useState({
        coin: { name: "", image: "", symbol: "", price: "", ath: "", market_cap: "" },
        chartData: "",
    });

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const res = await fetch(getCoinsList(vsCurrency, page));
                const json = await res.json();
                setCoins(json);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        };
        getData();
    }, [vsCurrency, page]);

    return (
        <>
            <div>
                <Header />
                <Search
                    vsCurrency={vsCurrency}
                    setVsCurrency={setVsCurrency}
                    setChart={setChart}
                />
                <CoinsTable
                    coins={coins}
                    vsCurrency={vsCurrency}
                    loading={loading}
                    setChart={setChart}
                />
                <Pagination page={page} setPage={setPage} />
                {chart.chartData && (
                    <Chart chart={chart} setChart={setChart} vsCurrency={vsCurrency} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
