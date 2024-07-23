import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import CoinsTable from "../modules/CoinsTable";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

import { getCoinsList } from "../../services/cryptoApi";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [vsCurrency, setVsCurrency] = useState("usd");
    const [loading, setLoading] = useState(true);
    const [chart, setChart] = useState({
        coin: {},
        chartData: "",
    });
    const [isVisible, setIsVisible] = useState(false);

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

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div>
            {/* {isVisible && } */}
            <Search
                vsCurrency={vsCurrency}
                setVsCurrency={setVsCurrency}
                setChart={setChart}
            />
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "600px",
                    }}
                >
                    <RotatingLines strokeColor="#007c74" strokeWidth="2" />
                </div>
            ) : (
                <CoinsTable coins={coins} vsCurrency={vsCurrency} setChart={setChart} />
            )}
            <Pagination page={page} setPage={setPage} />
            {chart.chartData && (
                <Chart chart={chart} setChart={setChart} vsCurrency={vsCurrency} />
            )}
        </div>
    );
}

export default HomePage;
