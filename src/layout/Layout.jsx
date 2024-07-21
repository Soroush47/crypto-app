import styles from "./Layout.module.css";

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h1>Crypto App</h1>
                <p>
                    <a href="https://github.com/Soroush47">My Github</a> | Reactjs Project
                </p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>
                    Developed by <span>Soroush Ghasemi</span>
                </p>
            </footer>
        </>
    );
}

export default Layout;
