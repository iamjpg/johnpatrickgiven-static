import Head from 'next/head'
import { useEffect, useReducer } from 'react';
import fetch from 'node-fetch';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: 15px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
  }
`
const Element = styled.div`
  position: relative;
  margin-right: 8px;
  background: #f5f5f5;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const Meta = styled.div`
  /* position: absolute; */
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  /* bottom: 0;
  left: 0;
  right: 0; */
  padding: 20px;
  font-size: 12px;
  min-height: 100px;
`

const initialState = {
  playedTracks: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'setPlayedTracks': {
      return {
        ...state,
        playedTracks: action.payload.track
      }
    }
    case 'default': {
      return state
    }
  }
}

const LastFm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jpgiven&api_key=ca39ef3aa3ee3ccafb3ad86ccbe69931&format=json&limit=200')
    .then(res => res.json())
    .then(json => dispatch({ type: 'setPlayedTracks', payload: json.recenttracks }));
  }, []);

  const returnTimeAgo = (track) => {
    return (track.date) ? moment(`${track.date['#text']}Z`).fromNow() : 'riiiiiight now';
  }

  const returnPlayedTracks = () => {
    return state.playedTracks.map((track, i) => {
      return (
        <article key={`article-${i}`}>
          <Element key={`element-${i}`} style={{ backgroundImage: `url(${track.image[3]["#text"]})` }}></Element>
          <Meta key={`meta-${i}`}>
              Listened to <a href={track.url} target="_blank">{ track.name }</a> by { track.artist["#text"] } on the album { track.album["#text"] } { returnTimeAgo(track) }.
          </Meta>
        </article>
      );
    });
  }

  return(
    <Container>{returnPlayedTracks()}</Container>
  );
}

export default LastFm;
