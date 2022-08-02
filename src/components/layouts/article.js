import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  const referrerOrRoot = () => {
    if (window.document) {
      console.log(document && document.referrer);
    }

    return '/';
  };

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
      </Helmet>

      <section className='main-article'>
        <Link to={referrerOrRoot()} className='no-underline'>
          <h1 className='faded'>Hello, my name is JP.</h1>
        </Link>

        {children}

        <Footer klass='article-footer' />
      </section>
    </>
  );
}
