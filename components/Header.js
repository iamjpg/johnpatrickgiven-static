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
          <div className="sep">&#11012;</div>
          <div className="font-wrapper">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
        </div>
        <h1>John Patrick Given</h1>
        <div className="comment">
          Is a software developer working for Zappos.com in Las Vegas, Nevada. Below you'll find a random smattering of my online activity.
        </div>
      </header>
      <style jsx global>{`
        header {
          padding: 50px;
          margin: auto;
          text-align: center;
        }
        h1 {
          font-size: 24px;
          margin: 20px 0;
          color: #222;
        }
        .comment {
          margin: auto;
          max-width: 500px;
          text-align: left;
          line-height: 120%;
          font-size: 14px;
        }
        .pic-fa-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-content: center;
          align-items: center;
        }
        .font-wrapper {
          width: 50px; height: 50px; overflow: hidden;
        }
        .pic {
          width: 50px;
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
