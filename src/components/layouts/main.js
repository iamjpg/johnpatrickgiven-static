import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
        <script async src='//static.getclicky.com/101375575.js'></script>
      </Helmet>

      <section className='main'>
        <h1>Hello, my name is JP.</h1>

        {children}

        <Footer />
      </section>
    </>
  );
}
