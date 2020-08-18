import { useEffect, useState } from 'react';

import About from './About';
import fetch from 'node-fetch';
import emoji from 'node-emoji';

const Header = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then(json => {
      setQuote(json);
    });
  }

  return (
    <>
      <header>
        <h1>Hello, my name is JP.</h1>
        <p>
          I'm a software engineer working in Las Vegas, Nevada. I love <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>, <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>, and currently learning to love <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I use my personal site to mess around with various <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">Javascript frameworks</a> and APIs. Right now, this site is a <a href="https://nextjs.org/" target="_blank">Next.JS</a> application simply showing my random Spotify listening habits. Pretty boring, I know { emoji.emojify(':call_me_hand:') } { emoji.emojify(':smile:') }
        </p>
        {quote &&
          <>
            <div className="quoteTitle">
              <div className="refreshQuote" onClick={getQuote}></div>
              Random Quote on Programming
            </div>
            <blockquote>
              { quote.en }<br /><br />
              <cite><a href={`https://www.google.com/search?q="${quote.author.replace(/ /g, '+')}"`} target="_blank">{ quote.author }</a></cite>
            </blockquote>
          </>
        }
        <About />
      </header>
      <style jsx global>{`
        header {
          padding: 0 0 0 0;
          max-width: 1440px;
          margin: auto;
          border-bottom: 1px solid #dcdcdc;
          font-family: 'Playfair Display', serif;
        }
        header h1 {
          font-family: 'Hind Siliguri', sans-serif;
          margin-top: 0;
          line-height: 110%;
        }
        header p {
          margin-bottom: 0;
        }
        .quoteTitle {
          position: relative;
          margin: 50px 0 16px 40px;
          font-weight: bold;
          font-size: 14px;
          display: inline-block;
        }
        .refreshQuote {
          position: absolute;
          right: -30px;
          top: 2px;
          width: 19px;
          height: 22px;
          background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.5 1C3.91015 1 1 3.91015 1 7.5H0C0 3.35786 3.35786 0 7.5 0C9.6733 0 11.6308 0.924852 13 2.40095V0H14V4L10 4V3L12.1905 3C11.007 1.76671 9.34315 1 7.5 1ZM7.5 14C11.0899 14 14 11.0899 14 7.5H15C15 11.6421 11.6421 15 7.5 15C5.3267 15 3.36918 14.0751 2 12.599V15H1V11H5V12H2.80955C3.993 13.2333 5.65685 14 7.5 14Z' fill='black'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          cursor: pointer;
        }
        blockquote {
          border-left: 5px solid #e84393;
          padding-left: 20px;
          margin-top: 0;
          margin-bottom: 0;
        }
        cite:before {
          content: '~ '
        }
      `}</style>
    </>
  );
}

export default Header;
