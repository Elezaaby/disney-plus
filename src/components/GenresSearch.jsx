import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import backgroundHome from '../images/home-background.png'

function GenresSearch() {
  let [moviesGenres, setMoviesGenres] = useState([])
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'
  const [seeMore, setSeeMore] = useState(1);
  let { type } = useParams()
  let { genre } = useParams()

  const handelSeeMoreClick = () => setSeeMore(seeMore + 1);


  async function getMoviesGenres(type, genre, page) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&query=${genre}&include_adult=false&page=${page}`);
    setMoviesGenres([...moviesGenres, ...data.results])
  }

  useEffect(() => {
    if (type === 'series') {
      getMoviesGenres('tv', genre, seeMore)
    }
    if (type === 'movies') {
      getMoviesGenres('movie', genre, seeMore)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeMore])


  return (
    <Container>
      {moviesGenres ?
        <Content>
          {moviesGenres.map((movie, key) =>
            <Wrap key={key}>
              <Link to={`/disney-plus/${'movies'}/details/${movie.id}`}>
                <img src={baseImgeUrl + movie.poster_path} alt="" />
              </Link>
            </Wrap>
          )}
        </Content>
        : ''}
      <ViewMore onClick={handelSeeMoreClick}>VIEW MORE</ViewMore>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 30px 50px 10px;
  text-align: center;
  overflow-x: hidden;
  position: relative;

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

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  grid-gap: 25px;
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

const ViewMore = styled.button`
  color: #fff;
  cursor: pointer;
  width: 20%;
  text-align: center;
  background-color: transparent;
  margin: 50px 0;
  padding: 10px 0;
  border-radius: 7px;
  border: 3px solid rgba(249,249,249,0.1);
  transition: 250ms all cubic-bezier(0.25,0.46,0.45,0.94) 0s;

  &:hover{
    transform: scale(1.01);
    border-color: rgba(249,249,249,0.8);
  }
`;


export default GenresSearch 