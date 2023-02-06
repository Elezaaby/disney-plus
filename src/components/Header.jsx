/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'


// -------------- import images and icon ---------------------- 
import logo from '../images/logo.svg'
import userImg from '../images/user-photo.png'
import homeIcon from '../images/home-icon.svg'
import searchIcon from '../images/search-icon.svg'
import watchlistIcon from '../images/watchlist-icon.svg'
import originalIcon from '../images/original-icon.svg'
import movieIcon from '../images/movie-icon.svg'
import seriesIcon from '../images/series-icon.svg'
// -------------- import images and icon ---------------------- 

function Header() {
  let navigate = useNavigate()

  function handelClickLogin() {
    navigate('/disney-plus/login')
  }

  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <Link to='/disney-plus'>
          <img src={homeIcon} alt='home Icon' />
          <span>home</span>
        </Link>
        <Link to=''>
          <img src={searchIcon} alt='home Icon' />
          <span>search</span>
        </Link>
        <Link to=''>
          <img src={watchlistIcon} alt='home Icon' />
          <span>watchlist</span>
        </Link>
        <Link to=''>
          <img src={originalIcon} alt='home Icon' />
          <span>originals</span>
        </Link>
        <Link to='/disney-plus/movies'>
          <img src={movieIcon} alt='home Icon' />
          <span>movie</span>
        </Link>
        <Link to=''>
          <img src={seriesIcon} alt='home Icon' />
          <span>series</span>
        </Link>
      </NavMenu>
      <UserImg onClick={handelClickLogin} src={userImg} />

    </Nav>
  )
}

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x:hidden ;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
  cursor: pointer;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color:#fff;

    img{
      height: 20px;
    }

    span{
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      position: relative;

      &:after{
        content: '';
        height: 1px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 0.5s;
      }
    }

    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
      
  }

`

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`

export default Header