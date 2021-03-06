import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Nav>
           <Logo src="/images/logo.svg" alt='disney-logo'/>
           <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>Home</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>Search</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>Originals</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>Movies</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>Series</span>
                </a>
           </NavMenu>
           <UserImg src="/images/userImg.png" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 40px;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    cursor: pointer;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        padding: 0 12px;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46,0.45, 0.94) 0s;
                
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    height: 50px;
    cursor: pointer;
`