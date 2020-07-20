import Head from 'next/head'
import LastFm from '../components/LastFm';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1440px;
  margin: auto;

  @media screen and (max-width: 1440px) {
    padding: 0 25px;
  }
`


const Home = () => {
  
  return(
    <MainContainer><LastFm /></MainContainer>
  );
}

export default Home;
