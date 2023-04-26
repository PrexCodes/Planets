import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
        <Headers>
            <Wrapper>
            <Logo to={'/'}> THE PLANETS </Logo>
            <Navbar> 
            <Items to={'/Mercury'}> Mercury </Items>
            <Items to={'/Venus'}> Venus </Items>
            <Items to={'/Earth'}> Earth </Items>
            <Items to={'/Mars'}> Mars </Items>
            <Items to={'/Jupiter'}> Jupiter </Items>
            <Items to={'/Saturn'}> Saturn </Items>
            <Items to={'/Uranus'}> Uranus </Items>
            <Items to={'/Neptune'}> Neptune </Items>

        </Navbar>
            </Wrapper>
        </Headers>
    )
}

const Wrapper = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center
`

const Headers = styled.div`
width: 100%;
color: white;

/* padding: 25px; */
/* position: fixed; */
border-bottom: 1px solid white;

`
const Logo = styled(Link)`
font-family: Antonio;
font-size: 25px;
text-decoration: none;
color: white;
`
const Navbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const Items = styled(Link)`
margin-right: 3vw;
cursor: pointer;
font-family: Spartan;
font-weight: 700;
font-size: 11px;
text-transform: uppercase;
text-decoration: none;
color: lightgray;
transition: all 500ms;
:hover{
    color: white
}
`

export default Header