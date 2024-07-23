import { useEffect } from "react";
import CoinCard from "./CoinCard";
import styles from "./CoinsTable.module.css";

function CoinsTable({ coins, vsCurrency, setChart }) {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <table className={styles.table}>
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
                {coins.map(coin => (
                    <CoinCard
                        key={coin.id}
                        data={coin}
                        vsCurrency={vsCurrency}
                        setChart={setChart}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default CoinsTable;
