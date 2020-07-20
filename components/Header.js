import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Head = styled.header`
  padding: 50px;
  margin: auto;
  text-align: center;

  svg {
    width: 50px !important;
    height: 50px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  margin: 20px 0;
  color: #222;
`

const Comment = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: left;
  line-height: 120%;
  font-size: 14px;
`

const Header = () => {
  return (
    <Head>
      <div style={{ width: '50px', height: '50px', overflow: 'hidden', margin: 'auto' }}>
        <FontAwesomeIcon icon={faLaptopCode} />
      </div>
      <Title>John Patrick Given</Title>
      <Comment>
        Is a software developer working for Zappos.com in Las Vegas, Nevada. Below you'll find a random smattering of my online activity.
      </Comment>
    </Head>
  );
}

export default Header;
