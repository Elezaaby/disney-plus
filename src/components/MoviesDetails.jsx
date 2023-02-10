import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import Recommended from './Recommended';
import VideoTrailer from './VideoTrailer';

import playIconBlack from '../images/play-icon-black.png'
import playIconWhite from '../images/play-icon-white.png'
import groupIcon from '../images/group-icon.png'


function MoviesDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playBtn, setPlayBtn] = useState(false)

  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'
  let { id } = useParams()
  let { type } = useParams()

  async function getMovieDetails(id, el) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${el}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    setMovieDetails(data)
    setGenres(data.genres)
  }

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    if (type === 'series') {
      getMovieDetails(id, 'tv')
    }
    if (type === 'movies') {
      getMovieDetails(id, 'movie')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Background>
        <img src={baseImgeUrl + movieDetails.backdrop_path} alt="" />
      </Background>
      <ImageLogo>
        <img src={baseImgeUrl + movieDetails.poster_path} alt="" />
      </ImageLogo>
      <Controls>
        <PlayButton onClick={() => setPlayBtn(true)}>
          <img src={playIconBlack} alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton onClick={() => setPlayBtn(true)}>
          <img src={playIconWhite} alt="" />
          <span>Trailer</span>
        </TrailerButton>
        {/*------------------------- Video Trailer Componantes -------------------------*/}
        {playBtn ? <VideoTrailer setPlayBtn={setPlayBtn} id={id} type={type} /> : ''}
        {/*------------------------- Video Trailer Componantes -------------------------*/}
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src={groupIcon} alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        {movieDetails.release_date ?
          <div>{movieDetails.release_date}</div>
          :
          <div>{movieDetails.first_air_date} - {movieDetails.last_air_date}</div>}
        <div>{genres.map((e, key) => <Link to={`/disney-plus/movies/${e.name}`} key={key}>{e.name},</Link>)}</div>
      </SubTitle>
      <Description>{movieDetails.overview}</Description>
      {/*------------------------- Recommended Componantes -------------------------*/}
      <Recommended id={id} type={type} />
      {/*------------------------- Recommended Componantes -------------------------*/}

    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px) ;
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageLogo = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 30vw;
  min-width: 260px;
  margin-top: 60px;
  margin-bottom: 30px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  background: rgb(249,249,249);
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    background: rgb(198,198,198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0,0,0,0.2);
  border: solid 1px rgb(249,249,249);
  color:rgb(249,249,249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 2px #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span{
    font-size: 30px;
    color: #fff;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249,249,249);
  min-height: 20px;
  margin-top: 26px;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  
  a{
    cursor: pointer;
    margin-left: 5px;
    text-decoration: none;
    color: #fff;

    &:hover{
      color: rgb(212, 207, 207);
    }
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 18px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 80%;
`;

export default MoviesDetails