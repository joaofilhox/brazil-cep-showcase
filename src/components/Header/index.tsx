import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.iconCircle}>
                <span role="img" aria-label="Mapa">📌</span>
            </div>
            <div className={styles.text}>
                <h1>Buscador de CEP</h1>
                <p>Encontre endereços com facilidade</p>
            </div>
        </header>
    );
}
