import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>John Patrick Given is a Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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