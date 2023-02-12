import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import backgroundHome from '../images/home-background.png'

function CrewMovies() {
  const [moviesData, setMoviesData] = useState([])
  const [tvData, setTvData] = useState([])
  const [details, setDetails] = useState([])
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'
  let { actorsId } = useParams()

  async function getCrewMovies(id) {
    let movies = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    let tv = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    let details = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    setMoviesData(movies.data.cast)
    setTvData(tv.data.cast)
    setDetails(details.data)
  }
  console.log(details)

  useEffect(() => {
    getCrewMovies(actorsId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <ProfileContainer>
        <Profile>
          <img src={baseImgeUrl + details.profile_path} alt="" />
        </Profile>
        <Description>
          <span>name : {details.name}</span><br />
          <span> birthday : {details.birthday}</span><br />
          <span>{details.biography}</span>
        </Description>
      </ProfileContainer>
      {moviesData ?
        <Content>
          {moviesData.map((movie, key) => movie.poster_path ?
            <Wrap key={key}>
              <Link to={`/disney-plus/${'movies'}/details/${movie.id}`}>
                <img src={baseImgeUrl + movie.poster_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )}
          {tvData.map((tv, key) => tv.poster_path ?
            <Wrap key={key}>
              <Link to={`/disney-plus/${'series'}/details/${tv.id}`}>
                <img src={baseImgeUrl + tv.poster_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )}
        </Content>
        : ''}
    </Container>
  )
}
const Container = styled.div` 
  min-height: calc(100vh - 70px);
  padding: 30px 50px 10px;
  overflow-x: hidden;
  
  &::before{
    content: '';
    background: url(${backgroundHome}) center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const ProfileContainer = styled.div` 
  display: flex;
  grid-gap: 15px;
  margin-top: 30px;
  width: 100%;
`;
const Description = styled.div` 
  margin-top: 30px;
  width: 80%;
  span{
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0,1fr));
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
const Profile = styled(Wrap)` 
  width: 20%;
`;



export default CrewMovies