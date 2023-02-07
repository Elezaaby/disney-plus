import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// -------------- import images and slider ---------------------- 
import disney from '../images/viewers-disney.png'
import pixar from '../images/viewers-pixar.png'
import marvel from '../images/viewers-marvel.png'
import starwars from '../images/viewers-starwars.png'
import dreamworks from '../images/viewers-dreamworks.png'
import national from '../images/viewers-national.png'
// -------------- import images and slider ---------------------- 
// -------------- import Videos start slider ---------------------- 
import videoDisney from '../videos/disney.mp4'
import videoPixar from '../videos/pixar.mp4'
import videoMarvel from '../videos/marvel.mp4'
import videoStar from '../videos/star-wars.mp4'
import videoDreamworks from '../videos/dreamworks.mp4'
import videoNational from '../videos/national-geographic.mp4'
// -------------- import Videos and slider ---------------------- 



function Viewers() {
  return (
    <Container>
      <Wrap>
        <Link to='/disney-plus/disney'>
          <img src={disney} alt="" />
          <video src={videoDisney} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/disney-plus/pixar'>
          <img src={pixar} alt="" />
          <video src={videoPixar} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/disney-plus/marvel'>
          <img src={marvel} alt="" />
          <video src={videoMarvel} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/disney-plus/star-wars'>
          <img src={starwars} alt="" />
          <video src={videoStar} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/disney-plus/dream-works'>
          <img src={dreamworks} alt="" />
          <video src={videoDreamworks} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/disney-plus/national-geographic'>
          <img src={national} alt="" />
          <video src={videoNational} autoPlay loop playsInline={true}></video>
        </Link>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0,1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;
`
const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  transition: 250ms all cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  border-radius: 10px;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px  10px -10px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
  video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    z-index: -1;
  }

  &:hover{
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px  22px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);

    video{
      opacity: 1;
    }
  }
  
`
export default Viewers