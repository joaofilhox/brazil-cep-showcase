import type { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface DefaultTemplateProps {
    children: ReactNode;
}

export function DefaultTemplate({ children }: DefaultTemplateProps) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
