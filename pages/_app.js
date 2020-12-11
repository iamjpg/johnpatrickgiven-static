import 'intersection-observer';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>John Patrick Given is a Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        body {
          padding: 100px;
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
          color: #e84393;
        }
        a[target="_blank"]::after {
          content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
          margin: 0px 3px 0px 5px;
        }
        @media (max-width: 414px) {
          body {
            padding: 100px 25px;
          }
        }
      `}</style>
    </>
  );
}

export default MyApp