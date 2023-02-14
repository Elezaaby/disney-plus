import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import backgroundHome from '../images/home-background.png'

function Search() {
  const [listMovie, setListMovie] = useState([])
  const [seeMore, setSeeMore] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchType, setSearchType] = useState('multi')
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'

  const handelSeeMoreClick = () => setSeeMore(seeMore + 1);

  async function gitMovieList(page, search, type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&query=${search}&page=${page}&include_adult=false`)
    setListMovie(data.results)
  }
  async function gitMovieListMore(page, search, type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&query=${search}&page=${page}&include_adult=false`)
    setListMovie([...listMovie, ...data.results])
  }

  window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('#filter')
    nav.classList.toggle('active', window.scrollY > 30)
  })


  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    gitMovieList(seeMore, searchInputValue, searchType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputValue, searchType])

  useEffect(() => {
    gitMovieListMore(seeMore, searchInputValue, searchType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeMore])

  return (
    <ContainerSearch>
      <InputSearch >
        <input autoFocus onChange={(e) => setSearchInputValue(e.target.value)} type="text" placeholder='search...' />
      </InputSearch>
      <ContainerTypes id='filter'>
        <Type onClick={() => setSearchType('multi')}>All</Type>
        <Type onClick={() => setSearchType('movie')}>movies</Type>
        <Type onClick={() => setSearchType('tv')}>tv</Type>
        <Type onClick={() => setSearchType('person')}>actors</Type>
      </ContainerTypes>
      <h4>Search Results : {searchInputValue}</h4>
      {listMovie ?
        <Content>
          {listMovie.map((movie) => searchType === 'multi' ?
            <>
              {movie.media_type === 'movie' && movie.poster_path ?
                <Wrap key={movie.id}>
                  <Link to={`/disney-plus/${'movies'}/details/${movie.id}`}>
                    <img src={baseImgeUrl + movie.poster_path} alt="" />
                  </Link>
                </Wrap>
                : ''}
              {movie.media_type === 'tv' && movie.poster_path ?
                <Wrap key={movie.id}>
                  <Link to={`/disney-plus/${'series'}/details/${movie.id}`}>
                    <img src={baseImgeUrl + movie.poster_path} alt="" />
                  </Link>
                </Wrap>
                : ''}
              {movie.media_type === 'person' && movie.profile_path ?
                <Wrap key={movie.id}>
                  <Link to={`/disney-plus/${'actors'}/details/${movie.id}`}>
                    <img src={baseImgeUrl + movie.profile_path} alt="" />
                  </Link>
                </Wrap>
                : ''}
            </>
            : '')}

          {listMovie.map((movie) => searchType === 'movie' && movie.poster_path ?
            <Wrap key={movie.id}>
              <Link to={`/disney-plus/${'movies'}/details/${movie.id}`}>
                <img src={baseImgeUrl + movie.poster_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )}

          {listMovie.map((movie) => searchType === 'tv' && movie.poster_path ?
            <Wrap key={movie.id}>
              <Link to={`/disney-plus/${'series'}/details/${movie.id}`}>
                <img src={baseImgeUrl + movie.poster_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )}

          {listMovie.map((movie) => searchType === 'person' && movie.profile_path ?
            <Wrap key={movie.id}>
              <Link to={`/disney-plus/${'actors'}/details/${movie.id}`}>
                <img src={baseImgeUrl + movie.profile_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )}

        </Content>
        : ''}
      <ViewMore onClick={handelSeeMoreClick}>VIEW MORE</ViewMore>
    </ContainerSearch>
  )
}
const ContainerSearch = styled.div`
  min-height: calc(100vh - 70px);
  padding: 10px 50px 10px;
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
  h4{
    text-align: start;
  }
`
const InputSearch = styled.div`
  width: 20%;
  position: fixed;
  top: 15px;
  right: 20%;
  z-index: 100;
  input{
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }

`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  grid-gap: 25px;
  margin-top: 30px;
`;
const ContainerTypes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  &.active {
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #090b13;
    box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}
`;
const Type = styled.div`
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  position: relative;
  background-color: #171a2b;
  padding: 10px;
  border-radius: 5px;
  transition: all .250ms;
  
  
  &:hover{
    background-color: #3f4250;
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

export default Search