import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <header>
        <div className="pic-fa-wrapper">
          <div className="pic">
            <img src="https://en.gravatar.com/userimage/3248087/aa6918306878727b4448bf24b61dec37.jpg" width="50" />
          </div>
          <div className="comment">
            <h1>John Patrick Given</h1>
            Is a software developer working for Zappos.com in Las Vegas, Nevada. Below you'll find a random smattering of my online activity, mainly my Spotify listening habits.
          </div>
        </div>
      </header>
      <style jsx global>{`
        header {
          padding: 50px 0;
          max-width: 1440px;
          margin: auto;
        }
        h1 {
          font-size: 24px;
          margin: 0 0 10px 0;
          color: #222;
        }
        .comment {
          text-align: left;
          line-height: 120%;
          font-size: 14px;
          margin-left: 20px;
        }
        .pic-fa-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          align-items: center;
        }
        .font-wrapper {
          width: 50px; height: 50px; overflow: hidden;
        }
        .pic {
          min-width: 50px;
          max-width: 50px;
          height: 50px;
          border-radius: 100%;
          overflow: hidden;
        }
        .pic img {
          border-radius: 100%;
        }
        .sep {
          margin: 0 10px;
          color: #222;
          font-size: 50px;
        }
        header .font-wrapper svg {
          width: 50px !important;
          height: 50px !important;
        }
      `}</style>
    </>
  );
}

export default Header;
