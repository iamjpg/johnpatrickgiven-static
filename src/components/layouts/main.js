import React from 'react';
import { Helmet } from 'react-helmet';
import emoji from 'node-emoji';

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
      <h1>Hello, my name is JP.</h1>
      <p>
        I'm a software engineer working in Las Vegas, Nevada. I love{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noreferrer'
        >
          Javascript
        </a>
        ,{' '}
        <a
          href='https://www.ruby-lang.org/en/'
          target='_blank'
          rel='noreferrer'
        >
          Ruby
        </a>
        , and currently learning to love{' '}
        <a href='https://www.rust-lang.org/' target='_blank' rel='noreferrer'>
          Rust
        </a>
        . I use my personal site to mess around with various{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks'
          target='_blank'
          rel='noreferrer'
        >
          Javascript frameworks
        </a>{' '}
        and APIs. Right now, this site is a{' '}
        <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
          Gatsby (React)
        </a>{' '}
        application using{' '}
        <a href='https://graphcms.com/' target='_blank'>
          GraphCMS
        </a>
        . Thanks for stopping by. {emoji.emojify(':call_me_hand:')}{' '}
        {emoji.emojify(':smile:')}
      </p>
      {children}
    </>
  );
}
