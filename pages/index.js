import Head from 'next/head'
import LastFm from '../components/LastFm';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 100px 0;

  @media (max-width: 414px) {
    padding: 50px 0;
  }
`


const Home = () => {
  
  return(
    <MainContainer><LastFm /></MainContainer>
  );
}

export default Home;
