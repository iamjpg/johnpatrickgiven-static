import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts/article';

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
  const canonicalUrl =
    typeof window === 'undefined' ? '' : window.location.href;

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

  return (
    <Layout>
      <p className='backToHome'>
        <Link to='/'>&larr; Back</Link>
      </p>
      <h2 className='articleHeader'>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}
