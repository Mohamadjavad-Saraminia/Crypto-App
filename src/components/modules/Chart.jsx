import styles from "../modules/Chart.module.css";

function Chart({ chart, setChart }) {
    return (
        <div className={styles.container}>
            {/* parte khorooj az chart */}
            <span className={styles.cross} onClick={() => setChart(null)}>X</span>

            {/* parte Namyeshe chart */}
            <div className={styles.chart}>

            </div>

        </div>
    )
}

export default Chart