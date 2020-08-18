import { useEffect, useState } from 'react';

import fetch from 'node-fetch';

function About() {

  const [aboutMe, setAboutMe] = useState(null);

  useEffect(() => {
   
  }, []);

  const fetchMyAbout = () => {
    if (aboutMe) {
      setAboutMe(null);
    } else {
      fetch('https://www.theblog.io/service/v1/page/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/about')
      .then(res => res.json())
      .then(json => {
        setAboutMe(json);
      });
    }
  }

  const createMarkup = () => {
    return {
      __html: aboutMe.page.body
    }
  }

  return(
    <>
      <section className="about">
        
        {aboutMe ?
          <>
            <div className="trigger"><span className="upArrow" onClick={fetchMyAbout}>Un poco menos de mi</span></div>
            <div className="aboutContent" dangerouslySetInnerHTML={createMarkup()}></div>
          </>
          : <div className="trigger"><span className="downArrow" onClick={fetchMyAbout}>Un poco mas sobre mi</span></div>
        }
      </section>

      <style jsx global>{`
        .about {
          padding-top: 80px;
        }
        .aboutContent {
          padding: 50px;
          background: #f5f5f5;
          margin: 0 0 100px 0;
        }
        .aboutContent h4 {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .aboutContent h4:first-child {
          margin-top: 0;
        }
        .trigger {
          text-align: right;
          color: #e84393;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 20px;
          padding-right: 20px;
        }
        .downArrow, .upArrow {
          position: relative;
        }
        .downArrow::after {
          position: absolute;
          top: 2px;
          content: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.85355 8.14645L5.5 7.79289L4.79289 8.5L5.14645 8.85355L5.85355 8.14645ZM7.5 10.5L7.14645 10.8536L7.5 11.2071L7.85355 10.8536L7.5 10.5ZM9.85355 8.85355L10.2071 8.5L9.5 7.79289L9.14645 8.14645L9.85355 8.85355ZM0.5 7.5H0H0.5ZM7.5 0.5V0V0.5ZM7.5 14.5V14V14.5ZM14.5 7.5H14H14.5ZM5.14645 8.85355L7.14645 10.8536L7.85355 10.1464L5.85355 8.14645L5.14645 8.85355ZM7.85355 10.8536L9.85355 8.85355L9.14645 8.14645L7.14645 10.1464L7.85355 10.8536ZM8 10.5V4H7V10.5H8ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35786 -1.78814e-07 1.78814e-07 3.35786 0 7.5H1ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C-1.78814e-07 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM15 7.5C15 3.35787 11.6421 1.78814e-07 7.5 0V1C11.0899 1 14 3.91015 14 7.5H15Z' fill='black'/%3E%3C/svg%3E");
          padding-left: 0.5em;
        }
        .upArrow::after {
          position: absolute;
          top: 2px;
          content: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.14645 6.85355L9.5 7.20711L10.2071 6.5L9.85355 6.14645L9.14645 6.85355ZM7.5 4.5L7.85355 4.14645L7.5 3.79289L7.14645 4.14645L7.5 4.5ZM5.14645 6.14645L4.79289 6.5L5.5 7.20711L5.85355 6.85355L5.14645 6.14645ZM14.5 7.5H14H14.5ZM7.5 14.5V14V14.5ZM7.5 0.5V0V0.5ZM0.5 7.5H0H0.5ZM9.85355 6.14645L7.85355 4.14645L7.14645 4.85355L9.14645 6.85355L9.85355 6.14645ZM7.14645 4.14645L5.14645 6.14645L5.85355 6.85355L7.85355 4.85355L7.14645 4.14645ZM7 4.5V11H8V4.5H7ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 -1.78814e-07 7.5 0V1ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35786 1.78814e-07 -1.78814e-07 3.35786 0 7.5H1ZM0 7.5C1.78814e-07 11.6421 3.35787 15 7.5 15V14C3.91015 14 1 11.0899 1 7.5H0Z' fill='black'/%3E%3C/svg%3E");
          padding-left: 0.5em;
        }
    `}</style>
    </>
  );
}

export default About;