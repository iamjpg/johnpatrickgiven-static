import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Triangle } from 'react-loader-spinner';
import Layout from '../components/layouts/article';
import rte from 'read-time-estimate';

export default function BlogPost({
  pageContext: {
    author,
    title,
    twitterPost,
    youTubeVideoId,
    date,
    content,
    tags,
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

  const returnTags = (tags) => tags.map((tag) => <li key={tag}>{tag}</li>);

  const makeYoutubeVideo = () => {
    return (
      <div
        className='video'
        style={{
          position: 'relative',
          paddingBottom: '56.25%' /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          title='YouTube Video'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${youTubeVideoId}`}
          frameBorder='0'
        />
      </div>
    );
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
          <div>~ {readingTime(content)} to read</div>
          {tags.length > 0 && (
            <ul className='tags' style={{ marginTop: '10px' }}>
              {returnTags(tags)}
            </ul>
          )}
        </div>
      </section>
      <div className='authorBreak'></div>

      {youTubeVideoId && makeYoutubeVideo()}

      {twitterPost ? (
        <div className='tweetFlex'>
          <div className='tweetContainer'>
            <div className='tweetLoading'>
              <Triangle
                height='80'
                width='80'
                radius='9'
                color='#e84393'
                ariaLabel='loading'
                wrapperStyle
                wrapperClass
              />
            </div>
            <TwitterTweetEmbed tweetId={twitterPost} />
          </div>
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      )}
    </Layout>
  );
}
