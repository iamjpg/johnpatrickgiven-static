import { useEffect, useState } from 'react';

import About from './About';
import fetch from 'node-fetch';
import emoji from 'node-emoji';

const Header = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then(json => {
      setQuote(json);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Hello, my name is JP.</h1>
        <p>
          I'm a software engineer working in Las Vegas, Nevada. I love <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>, <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>, and currently learning to love <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I use my personal site to mess around with various <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">Javascript frameworks</a> and APIs. Right now, this site is a <a href="https://nextjs.org/" target="_blank">Next.JS</a> application simply showing my random Spotify listening habits. Pretty boring, I know { emoji.emojify(':call_me_hand:') } { emoji.emojify(':smile:') }
        </p>
        {quote &&
          <>
            <div className="quoteTitle">Random Quote on Programming</div>
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
          margin: 50px 0 16px 40px;
          font-weight: bold;
          font-size: 14px;
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
