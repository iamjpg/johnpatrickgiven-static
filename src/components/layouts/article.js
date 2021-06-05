import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&family=Playfair+Display:ital@0;1&display=swap'
          rel='stylesheet'
        ></link>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
      </Helmet>

      <section className='main'>
        <h1 className='faded'>Hello, my name is JP.</h1>

        {children}

        <Footer klass='article-footer' />
      </section>
    </>
  );
}
