import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Twitter from '../../assets/svg/twitter.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

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

      <h1 className='faded'>Hello, my name is JP.</h1>

      {children}

      <footer className='article-footer'>
        <div>
          <Link
            to='http://twitter.com/iamjpg'
            target='_blank'
            rel='noreferrer'
            className='nomarker'
          >
            <Twitter width={16} fill='#e5e5e5' />
          </Link>
        </div>
        <div>
          <Link
            to='https://www.linkedin.com/in/given/'
            target='_blank'
            rel='noreferrer'
            className='nomarker'
          >
            <Linkedin width={16} fill='#e5e5e5' />
          </Link>
        </div>
      </footer>
    </>
  );
}
