import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Next-Antd{' '}
                    <a rel="noreferrer" target="_blank" href="https://github.com/hridoy43/next-antd-boilerplate">
                        Boilerplate
                    </a>
                </h1>

                <p className={styles.description}>Zero Config!</p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an i dfsd sdfnteractive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <span>
                    {'Next-Antd-Boilerplate By '}
                    <a href="https://github.com/hridoy43" target="_blank" rel="noopener noreferrer">
                        @hridoy43
                    </a>
                </span>
            </footer>
        </div>
    );
}
