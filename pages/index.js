import Head from 'next/head'
import LastFm from '../components/LastFm';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1440px;
  margin: auto;

  @media screen and (max-width: 1440px) {
    padding: 50px 25px 0;
  }
`


const Home = () => {
  
  return(
    <MainContainer><LastFm /></MainContainer>
  );
}

export default Home;
