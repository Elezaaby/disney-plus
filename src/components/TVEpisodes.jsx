import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function TVEpisodes({ id, seasonNum, setSeasonBtn }) {
  const [episodesData, setEpisodesData] = useState([])
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'

  async function gitMovieList(idTV, numSes) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${idTV}/season/${numSes}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    setEpisodesData(data.episodes)
  }
  useEffect(() => {
    gitMovieList(id, seasonNum)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonNum])

  return (
    <Container>
      <CloseEpisodes onClick={() => setSeasonBtn(false)}></CloseEpisodes>
      <Episodes>
        <h4>All episodes {episodesData.length}</h4>
        {episodesData ?
          <Episode>
            {episodesData.map((episode, key) =>
              <Wrap key={key}>
                <img src={baseImgeUrl + episode.still_path} alt="" />
              </Wrap>
            )}
          </Episode>
          : ''}
      </Episodes>
    </Container>
  )
}

const Container = styled.div`
  overflow-x: hidden;
  border-radius: 10px;
  margin-top: 20px;
`;

const Episodes = styled.div`
  position: relative;
  z-index: 10;
  padding: 50px;
  background-color: #040714;
  h4{
    margin-top: 0;
  }
`;

const Episode = styled.div`
  display: grid;
  grid-template-columns: repeat(5 , minmax(0,1fr));
  grid-gap: 15px;
  margin-top: 30px;
`;

const Wrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px  10px -10px;
  transition: 250ms all cubic-bezier(0.25,0.46,0.45,0.94) 0s;

  img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px  22px -10px;
    border-color: rgba(249,249,249,0.8);
  }
`;

const CloseEpisodes = styled.div`
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`


export default TVEpisodes