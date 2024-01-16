import styles from "./Header.module.css";

// display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 background: "#b48840",
//                 color: "#fff6dc",
//                 borderRadius: "10px",
//                 padding: "10px",
//                 marginBottom: "80px",

function Header() {
    return (
        <div className={styles.container}>
            <h1>Crypto App</h1>
            <p>
                <a href="https://botostart.ir">Botostart</a> | React.js Full Course
            </p>
        </div>
    );
}

export default Header;
