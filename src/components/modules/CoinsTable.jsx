import { RotatingLines } from "react-loader-spinner";

import CoinCard from "./CoinCard";

import styles from "./CoinsTable.module.css";

function CoinsTable({ coins, vsCurrency, loading, setChart }) {
    return (
        <div style={{ minHeight: "600px" }}>
            {loading ? (
                <div
                    style={{ display: "flex", justifyContent: "center", height: "600px" }}
                >
                    <RotatingLines strokeColor="#007c74" strokeWidth="2" />
                </div>
            ) : (
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
                        {/* <tr>
                            <th colSpan="6">
                                <hr />
                            </th>
                        </tr> */}
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
            )}
        </div>
    );
}

export default CoinsTable;
