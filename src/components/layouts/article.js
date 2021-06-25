import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from '../layouts/footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>John Patrick Given is a Javascript Developer</title>
        <link href="/static/prism-okaidia.min.css"></link>
        <script src="/static/prism.min.js"></script>
      </Helmet>

      <section className='main-article'>
        <Link to='/' className='no-underline'>
          <h1 className='faded'>Hello, my name is JP.</h1>
        </Link>

        {children}

        <Footer klass='article-footer' />
      </section>
    </>
  );
}
