import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={`${styles.container}`}>
            <p>
                Developed by <span>Soroush Ghasemi</span>
            </p>
        </div>
    );
}

export default Footer;
