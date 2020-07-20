import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <header>
        <div style={{ width: '50px', height: '50px', overflow: 'hidden', margin: 'auto' }}>
          <FontAwesomeIcon icon={faLaptopCode} />
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
        header svg {
          width: 50px !important;
          height: 50px !important;
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
      `}</style>
    </>
  );
}

export default Header;
