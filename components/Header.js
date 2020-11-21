import { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../reducers/quoteReducer';

import About from './About';
import fetch from 'node-fetch';
import emoji from 'node-emoji';

const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://rawcdn.githack.com/iamjpg/programming-quotes-api/47c27e62513322a5c26b92212c0fc5ed0d4180ab/backup/quotes.json')
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'SET_QUOTES',
        payload: {
          quotes: json
        }
      });
      dispatch({ type: 'SET_QUOTE' });
    });
  }

  const getNewQuote = () => {
    dispatch({ type: 'SET_QUOTE' });
  }

  return (
    <>
      <header>
        <h1>Hello, my name is JP.</h1>
        <p>
          I'm a software engineer working in Las Vegas, Nevada. I love <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>, <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>, and currently learning to love <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I use my personal site to mess around with various <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">Javascript frameworks</a> and APIs. Right now, this site is a <a href="https://nextjs.org/" target="_blank">Next.JS</a> application simply showing my random Spotify listening habits. Pretty boring, I know { emoji.emojify(':call_me_hand:') } { emoji.emojify(':smile:') }
        </p>
        {state.quote &&
          <>
            <div className="quoteTitle">
              <div className="refreshQuote" onClick={getNewQuote}></div>
              Random Quote on Programming
            </div>
            <blockquote>
              { state.quote.en }<br /><br />
              <cite><a href={`https://www.google.com/search?q="${state.quote.author.replace(/ /g, '+')}"`} target="_blank">{ state.quote.author }</a></cite>
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
          width: 15px;
          height: 15px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z'/%3E%3C/svg%3E");
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
