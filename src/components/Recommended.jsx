import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Recommended({ id, type, setSeasonBtn }) {
  const [recommended, setRecommended] = useState([])
  const baseImgeUrl = 'https://image.tmdb.org/t/p/original/'

  async function getRecommendedData(id, type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
    setRecommended(data.results)
  }

  useEffect(() => {
    if (type === 'series') {
      getRecommendedData(id, 'tv')
    }
    if (type === 'movies') {
      getRecommendedData(id, 'movie')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  return (
    <>
      <h4>Recommended for you</h4>
      <Container>
        {recommended ?
          recommended.map((item, key) => key < 14 && item.poster_path ?
            <Wrap onClick={() => setSeasonBtn(false)} key={key} >
              <Link to={`/disney-plus/${type}/details/${item.id}`}>
                <img src={baseImgeUrl + item.poster_path} alt="" />
              </Link>
            </Wrap>
            : ''
          )
          : ''
        }
      </Container >
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0,1fr)) ;
  grid-gap: 10px;
  margin-top: 30px;
  padding: 0  0 50px 0;
  position: relative;
  z-index: 10;

  h4{
    margin-top: 50px;
    text-transform: capitalize;
  }
`
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
export default Recommended