import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useEffectOnce } from 'react-use';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  const [listenerSet, setListerSet] = useState(false);

  const setScrollListener = () => {
    if (!listenerSet) {
      document.addEventListener('scroll', (event) => {
        if (
          window?.location.href === 'http://localhost:8000/' ||
          window?.location.href.indexOf('http://localhost:8000/?st=') > -1 ||
          window?.location.href === 'https://johnpatrickgiven.com/' ||
          window?.location.href.indexOf('https://johnpatrickgiven.com/?st=') >
            -1
        ) {
          localStorage.setItem('scrollTop', window.scrollY);
        }
      });
      setListerSet(true);
    }
  };

  useEffectOnce(() => {
    setScrollListener();
    if (window?.location.search) {
      const { st } = Object.fromEntries(
        new URLSearchParams(window.location.search)
      );
      window.scrollTo(0, st);
    }
  });

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
        <script async src='//static.getclicky.com/101375575.js'></script>
        <meta name='referrer' content='no-referrer'></meta>
      </Helmet>

      <section className='main'>
        <h1>Hello, my name is JP.</h1>

        {children}

        <Footer />
      </section>
    </>
  );
}
