import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import Recommended from './Recommended';
import VideoTrailer from './VideoTrailer';

import playIconBlack from '../images/play-icon-black.png'
import playIconWhite from '../images/play-icon-white.png'
import groupIcon from '../images/group-icon.png'
import TVEpisodes from './TVEpisodes';


function MoviesDetails() {
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'
  const [movieDetails, setMovieDetails] = useState([]);
  const [tvSeasons, setTvSeasons] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playBtn, setPlayBtn] = useState(false)
  const [seasonBtn, setSeasonBtn] = useState(false)
  const [seasonNum, setSeasonNum] = useState(1)


  let { id } = useParams()
  let { type } = useParams()

  async function getDetailsData(id, el) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${el}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    let castData = await axios.get(`https://api.themoviedb.org/3/${el}/${id}/credits?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    setMovieDetails(data)
    setTvSeasons(data.seasons)
    setGenres(data.genres)
    setCrewData(castData.data.cast)
  }
  console.log(movieDetails)


  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    if (type === 'series') {
      getDetailsData(id, 'tv')
    }
    if (type === 'movies') {
      getDetailsData(id, 'movie')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

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
      {tvSeasons ?
        <>
          <h4>Seasons</h4>
          <ContainerSeasons>
            {tvSeasons.map((season, key) => season.season_number !== 0 ?
              <Wrap
                onClick={() => {
                  setSeasonBtn(true)
                  setSeasonNum(season.season_number)
                }}
                key={key}
              >
                <img src={baseImgeUrl + season.poster_path} alt="" />
              </Wrap>
              : ''
            )}
          </ContainerSeasons>

          {seasonBtn ? <TVEpisodes id={id} seasonNum={seasonNum} setSeasonBtn={setSeasonBtn} /> : ''}
        </>
        : ''
      }
      {/*------------------------- cast Componantes -------------------------*/}
      <CrewContainer>
        <h4>Cast</h4>
        {crewData ?
          <Crew>
            {crewData.map((crew, key) => key < 12 && crew.profile_path ?
              <Wrap key={key}>
                <Link to={`/disney-plus/actors/details/${crew.id}`}>
                  <img src={baseImgeUrl + crew.profile_path} alt="" />
                </Link>
              </Wrap>
              : ''
            )}
          </Crew>
          : ''}
      </CrewContainer>
      {/*------------------------- cast Componantes -------------------------*/}
      {/*------------------------- Recommended Componantes -------------------------*/}
      <Recommended id={id} type={type} setSeasonBtn={setSeasonBtn} />
      {/*------------------------- Recommended Componantes -------------------------*/}

    </Container >
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

const ContainerSeasons = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-gap: 10px;
  margin-top: 30px;
  position: relative;

  .activeSeason{
    transform: scale(1.1);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px  22px -10px;
    border-color: rgba(249,249,249,0.8);
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px  10px -10px;
  transition: 250ms all cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  z-index: 10;

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

const CrewContainer = styled.div`
`
const Crew = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr)) ;
  grid-gap: 10px;
  margin-top: 10px;
  position: relative;
  z-index: 10;
`

export default MoviesDetails