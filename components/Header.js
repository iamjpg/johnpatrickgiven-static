import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <header>
        <h1>John Patrick Given</h1>
        <p>
          Hello, I'm a software engineer working in Las Vegas, Nevada. I love Javascript, Ruby, and currently learning to love Rust. I use my personal site to mess around with various Javascript frameworks and APIs. Right now, this site is a Next.JS application simply showing my random Spotify listening habits.
        </p>
      </header>
      <style jsx global>{`
        header {
          padding: 50px;
          max-width: 1440px;
          margin: auto;
          border-bottom: 1px solid #dcdcdc;
          font-family: 'Playfair Display', serif;
        }
        header h1 {
          font-family: 'Hind Siliguri', sans-serif;
          line-height: 110%;
        }

        @media (max-width: 414px) {
          header {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
