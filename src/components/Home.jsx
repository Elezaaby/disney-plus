import React, { useEffect } from 'react'
import styled from 'styled-components'
import backgroundHome from '../images/home-background.png'
import ImgCarousel from './ImgCarousel'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [])

  return (
    <Container>
      <ImgCarousel />
      <Viewers />
      <Movies />
    </Container>
  )
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 50px 10px;
  position: relative;
  overflow-x: hidden;

  &::before{
    content: '';
    background: url(${backgroundHome}) center center / cover no-repeat fixed;
    /* background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default Home