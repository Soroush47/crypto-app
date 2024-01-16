import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
    // const selected = {
    //     fontSize: "15px",
    //     color: "#fff",
    //     margin: "7px",
    //     backgroundColor: "#1a7c6f",
    //     width: "21px",
    //     height: "20px",
    //     lineHeight: "20px",
    //     border: "none",
    //     borderRadius: "4px",
    //     cursor: "pointer",
    // };

    // const unSelected = {
    //     fontSize: "15px",
    //     color: "#d1d1d1",
    //     backgroundColor: "#131315",
    //     margin: "7px",
    //     width: "21px",
    //     height: "20px",
    //     lineHeight: "20px",
    //     border: "1px solid #1a7c6f",
    //     borderRadius: "4px",
    //     cursor: "pointer",
    // };

    // const btn = {
    //     color: "#e9e9e9",
    //     margin: "7px",
    //     width: "65px",
    //     height: "25px",
    //     backgroundColor: "#1a7c6f",
    //     border: "none",
    //     borderRadius: "4px",
    //     cursor: "pointer",
    // };

    // const unBtn = {
    //     color: "#5f5f5f",
    //     margin: "7px",
    //     width: "65px",
    //     height: "25px",
    //     backgroundColor: "#203935",
    //     border: "none",
    //     borderRadius: "4px",
    // };

    return (
        <div
            className={styles.container}
            // style={{
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //     marginTop: "80px",
            // }}
        >
            <button
                disabled={page === 1}
                className={`${styles.nextPrevBtn} ${
                    page === 1 ? styles.notActiveBtn : styles.activeBtn
                }`}
                // style={page === 1 ? unBtn : btn}
                onClick={() => setPage(page - 1)}
            >
                previous
            </button>
            <button
                disabled={page === 1}
                className={`${styles.numBtn} ${
                    page === 1 ? styles.selected : styles.unSelected
                }`}
                // style={page === 1 ? selected : unSelected}
                onClick={() => setPage(1)}
                value={1}
            >
                1
            </button>
            <button
                disabled={page === 2}
                className={`${styles.numBtn} ${
                    page === 2 ? styles.selected : styles.unSelected
                }`}
                // style={page === 2 ? selected : unSelected}
                onClick={() => setPage(2)}
                value={2}
            >
                2
            </button>
            {page > 2 && page < 9 ? (
                <>
                    <span>...</span>
                    <button
                        className={styles.numBtn + " " + styles.selected}
                        value={page}
                    >
                        {page}
                    </button>
                    <span>...</span>
                </>
            ) : (
                <span>...</span>
            )}
            <button
                disabled={page === 9}
                className={`${styles.numBtn} ${
                    page === 9 ? styles.selected : styles.unSelected
                }`}
                // style={page === 9 ? selected : unSelected}
                onClick={() => setPage(9)}
                value={9}
            >
                9
            </button>
            <button
                disabled={page === 10}
                className={`${styles.numBtn} ${
                    page === 10 ? styles.selected : styles.unSelected
                }`}
                onClick={() => setPage(10)}
                value={10}
            >
                10
            </button>
            <button
                disabled={page === 10}
                className={`${styles.nextPrevBtn} ${
                    page === 10 ? styles.notActiveBtn : styles.activeBtn
                }`}
                // style={page === 10 ? unBtn : btn}
                onClick={() => setPage(page + 1)}
            >
                next
            </button>
        </div>
    );
}

export default Pagination;
