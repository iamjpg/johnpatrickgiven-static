import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
      </Helmet>

      <section className='main'>
        <h1>Hello, my name is JP.</h1>

        {children}

        <Footer />
      </section>
    </>
  );
}
