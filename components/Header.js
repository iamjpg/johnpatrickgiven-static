import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import emoji from 'node-emoji';

const Header = () => {
  return (
    <>
      <header>
        <h1>Hello, my name is JP.</h1>
        <p>
          I'm a software engineer working in Las Vegas, Nevada. I love <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>, <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>, and currently learning to love <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I use my personal site to mess around with various Javascript frameworks and APIs. Right now, this site is a Next.JS application simply showing my random Spotify listening habits. Pretty boring, I know { emoji.emojify(':call_me_hand:') }
        </p>
      </header>
      <style jsx global>{`
        header {
          padding: 0 0 100px 0;
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

        @media (max-width: 414px) {
          header {
            font-size: 18px;
            padding: 0 0 50px 0;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
