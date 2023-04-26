import React, { Component, useState } from "react";
import styled from "styled-components";
import {AiOutlineHeart,
        AiFillPlayCircle,
        AiFillHeart
      } from "react-icons/ai";

const Apps =() =>{
  const [initState, newState] = useState<boolean>(false)

  const listofVideos = [
    {title: 'First Video', desc: 'First Desc', color: 'darkred'},
    {title: 'Second Video', desc: 'Second Desc', color: 'lightblue'},
    {title: 'Third Video', desc: 'Third Desc', color: 'darkgreen'},
  ]

    const toggle =() =>{
      newState(!initState)
      console.log(initState)
    }

  return (
    <Main>
      <Container>
        <Texts> Destiny</Texts>
        {listofVideos.map(el=>{
          return(
            <Holder>
        <Videoclip bg={el.color}>
            <Icon1></Icon1>
        </Videoclip>
        <Videocontent>
          <Title> {el.title} </Title>
          <Description>{el.desc}</Description>
        </Videocontent>
        <Button onClick={()=>{
           toggle();
        }}>
        {initState ? (<Icon2></Icon2>) : (<Icon3></Icon3>)}
        </Button>
      </Holder>
          )
        })}


         </Container>

    </Main>
  )
}

export default Apps
const Button = styled.div``

const Main=styled.div`
height: 100vh;
width: 100%;
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;


`
const Texts=styled.div`
font-size: 20px;
font-weight:700;
margin-bottom:20px;
`
const Container=styled.div`
height: 70vh;
width: 70%;
background-color: white;
border-radius: 10px;
padding: 15px;
`
const Holder=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
`
const Videoclip=styled.div<{bg:string}>`

height: 80px;
width: 130px;
background-color: ${({bg})=>bg};
border-radius:10px;
display:flex;
justify-content:center;
align-items: center;


`
const Videocontent=styled.div`
flex:1;
margin-left:10px;
`
const Title=styled.div`
font-weight: 700;

`
const Description=styled.div``
const Icon1=styled(AiFillPlayCircle)`
font-size: 30px;
opacity: 0.3;
transition: all 1000ms;
color: rgb(255, 255, 255);


:hover{
  opacity: 0.8;
  cursor: pointer;
}



`
const Icon2=styled(AiOutlineHeart)`
font-size:33px;
padding: 10px;
border-radius:50%;
:hover{
  background-color:lightgray;
  cursor: pointer;
}

`
const Icon3=styled(AiFillHeart)`
font-size:33px;
padding: 10px;
border-radius:50%;
color: red;
:hover{
  background-color:lightgray;
  cursor: pointer;
}

`