import React, { useEffect, useReducer } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import emoji from 'node-emoji';
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

  const makeLink = (slug) => {
    return `/post/${slug}`;
  };

  const { quote, author } = state;

  const formatDate = function (timestamp) {
    // Create a date object from the timestamp
    var date = new Date(timestamp);

    // Create a list of names for the months
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // return a formatted date
    return (
      months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
    );
  };

  const addDays = function (date, days) {
    date.setDate(date.getDate() + days);
    return date;
  };

  const {
    posts: { nodes: allPosts },
  } = useStaticQuery(graphql`
    {
      posts: allGraphCmsPost(sort: { fields: [id], order: DESC }) {
        nodes {
          author {
            name
            picture {
              url
              size
            }
          }
          id
          date
          slug
          tags
          title
          coverImage {
            url
          }
          excerpt
        }
      }
    }
  `);

  return (
    <Layout>
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
        <a href='https://graphcms.com/' target='_blank' rel='noreferrer'>
          GraphCMS
        </a>
        . Thanks for stopping by. {emoji.emojify(':call_me_hand:')}{' '}
        {emoji.emojify(':smile:')}
      </p>
      {quote && (
        <>
          <div className='quoteTitle'>
            <h6>Random Quote on Programming</h6>
            <div
              className='refreshQuote'
              role='none'
              onClick={getNewQuote}
            ></div>
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
                rel='noreferrer'
              >
                {author}
              </a>
            </cite>
          </blockquote>
        </>
      )}
      <h2>Journal</h2>
      <section className='articles'>
        {allPosts.map((post) => (
          <Link to={makeLink(post.slug)} key={post.slug}>
            <article>
              <div className='postDate'>
                {formatDate(addDays(new Date(post.date), 1))}
              </div>
              <h5 style={{ marginTop: 0, marginBottom: '10px' }}>
                {post.title}
              </h5>
              <div className='postExerpt'>{post.excerpt}</div>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
