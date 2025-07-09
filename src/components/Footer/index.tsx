import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
