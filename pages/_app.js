import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
/*
export default function App({ Component, pageProps }) {
    return (
        <div className="container">
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>Sobre</a>
                </Link>
                <Link href="/occupations">
                    <a>occupations</a>
                </Link>
                <Link href="/contact">
                    <a>Contato</a>
                </Link>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}*/