import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Movies() {
  const [topRatedMovie, setTopRatedMovie] = useState();
  const [latestMovie, setLatestMovie] = useState();
  const [upComingMovie, setUpComingMovie] = useState();
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'


  async function gitMovie() {
    let topRateResponse = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1")
    let LatestResponse = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1")
    let upComingResponse = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1")
    setTopRatedMovie(topRateResponse.data.results)
    setLatestMovie(LatestResponse.data.results)
    setUpComingMovie(upComingResponse.data.results)
  }


  useEffect(() => {
    gitMovie()
  }, [])

  return (
    <Container>
      <h4>Upcoming movies</h4>
      {upComingMovie ?
        <Content>
          {upComingMovie.map((movie, key) => key < 5 ?
            <Wrap key={key} to='/disney-plus/details' >
              <img src={baseImgeUrl + movie.poster_path} alt="" />
            </Wrap>
            : ''
          )}
        </Content>
        : ''
      }
      <h4>Top Rated</h4>
      {topRatedMovie ?
        <Content>
          {topRatedMovie.map((movie, key) => key < 5 ?
            <Wrap key={key} to='/disney-plus/details' >
              <img src={baseImgeUrl + movie.poster_path} alt="" />
            </Wrap>
            : ''
          )}
        </Content>
        : ''
      }
      <h4>Latest movies</h4>
      {latestMovie ?
        <Content>
          {latestMovie.map((movie, key) => key < 5 ?
            <Wrap key={key} to='/disney-plus/details' >
              <img src={baseImgeUrl + movie.poster_path} alt="" />
            </Wrap>
            : ''
          )}
        </Content>
        : ''
      }
    </Container >
  )
}

const Container = styled.div`
    h4{
    margin-top: 50px;
    text-transform: capitalize;
  }
  
`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  grid-gap: 25px;

`
const Wrap = styled(Link)`
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
  
`

export default Movies