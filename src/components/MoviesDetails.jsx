import React from 'react'
import styled from 'styled-components'

import playIconBlack from '../images/play-icon-black.png'
import playIconWhite from '../images/play-icon-white.png'
import groupIcon from '../images/group-icon.png'

function MoviesDetails() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Background>
      <ImageLogo>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
      </ImageLogo>
      <Controls>
        <PlayButton>
          <img src={playIconBlack} alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src={playIconWhite} alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src={groupIcon} alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2022.7m Family, fantasy, Kids, animation
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat tempore illum animi ex distinctio illo? Nostrum sint esse maxime quam ullam illo veniam voluptatum voluptates molestias. Pariatur, quo ad.
      </Description>
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
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 7;
`;

export default MoviesDetails