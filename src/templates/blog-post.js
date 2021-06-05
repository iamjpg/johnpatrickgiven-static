import React from 'react';
import Layout from '../components/layouts/main';

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

  return <Layout>Yo</Layout>;
}
