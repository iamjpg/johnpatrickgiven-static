import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Layout from '../components/layouts/article';
import rte from 'read-time-estimate';

export default function BlogPost({
  pageContext: {
    id,
    author,
    title,
    twitterPost,
    youtubeVideoID,
    publishedAt,
    date,
    content: { html },
  },
}) {
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

  const readingTime = (html) => {
    const { humanizedDuration } = rte(html, 275, 12, 500, ['img']);
    return humanizedDuration;
  };

  return (
    <Layout>
      {/* <p className='backToHome'>
        <Link to='/'>&larr; Back</Link>
      </p> */}
      <h2 className='articleHeader'>{title}</h2>
      {/* <p className='article-date'>{formatDate(addDays(new Date(date), 1))}</p> */}
      <section className='authorSection'>
        <div>
          <div style={{ backgroundImage: `url(${author.picture.url})` }}></div>
        </div>
        <div>
          <div>
            Written by {author.name} on {formatDate(addDays(new Date(date), 1))}
          </div>
          <div>~ {readingTime(html)} to read</div>
        </div>
      </section>
      <div class='authorBreak'></div>
      {twitterPost && <TwitterTweetEmbed tweetId={twitterPost} />}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}
