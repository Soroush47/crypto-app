import { IoIosArrowUp } from "react-icons/io";

import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
    return (
        <div className={styles.container}>
            <IoIosArrowUp
                size={33}
                className={styles.icon}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            />
        </div>
    );
}

export default ScrollToTop;
