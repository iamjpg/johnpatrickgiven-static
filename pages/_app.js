import 'intersection-observer';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>John Patrick Given is a Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        body {
          padding: 50px;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 24px;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #00a8ff;
        }
      `}</style>
    </>
  );
}

export default MyApp