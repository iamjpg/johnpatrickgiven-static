import React, { useEffect, useReducer } from 'react';
import fetch from 'node-fetch';
import Layout from '../components/layouts/main';
import { initialState, reducer } from '../reducers/quoteReducer';

// markup
const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch(
      'https://rawcdn.githack.com/iamjpg/programming-quotes-api/47c27e62513322a5c26b92212c0fc5ed0d4180ab/backup/quotes.json'
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'SET_QUOTES',
          payload: {
            quotes: json,
          },
        });
        dispatch({ type: 'SET_QUOTE' });
      });
  };

  const getNewQuote = (e) => {
    e.target.classList.add('refreshQuoteAnimate');
    setTimeout(() => {
      e.target.classList.remove('refreshQuoteAnimate');
    }, 500);
    dispatch({ type: 'SET_QUOTE' });
  };

  const { quote, author } = state;

  return (
    <Layout>
      {quote && (
        <>
          <div className='quoteTitle'>
            <h6>Random Quote on Programming</h6>
            <div className='refreshQuote' onClick={getNewQuote}></div>
          </div>
          <blockquote>
            {quote}
            <br />
            <br />
            <cite>
              <a
                href={`https://www.google.com/search?q="${author.replace(
                  / /g,
                  '+'
                )}"`}
                target='_blank'
              >
                {author}
              </a>
            </cite>
          </blockquote>
        </>
      )}
      <h3>Writings</h3>
    </Layout>
  );
};

export default IndexPage;
