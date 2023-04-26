import React, { useState } from 'react'
import styled from 'styled-components'
import mars from '../assets/planet-mars.svg'
import marsinternal from '../assets/planet-mars-internal.svg'
const Mars = ()=>{

    const [useImage1, newImage1] = useState<boolean>(true)
    const [useImage2, newImage2] = useState<boolean>(false)
    const [useImage3, newImage3] = useState<boolean>(false)

    const onTap1 = () =>{
        newImage1(true);
        newImage2(false)
        newImage3(false)
    }
    const onTap2 = () =>{
        newImage1(false);
        newImage2(true)
        newImage3(false)
    }
    const onTap3 = () =>{
        newImage1(false);
        newImage2(false)
        newImage3(true)
    }

    const footeritems = [
        {title: 'ROTATION TIME', props: '58.6 DAYS'},
        {title: 'REVOLUTION TIME', props: '87.97 DAYS'},
        {title: 'RADIUS', props: '2,439.7 KM'},
        {title: 'AVERAGE TEMP.', props: '430°C'},
    ]
    return(
        <Main>
            <Body>
                {useImage1 ? <Images src={mars}>
                </Images> : useImage2 ? <Images src={marsinternal}>
                </Images>: useImage3? <Images src={mars}>
                </Images>: null}
                <RightText>
                    <Title> mars </Title>
                    {useImage1 ? <Description> mars is the first planet from the Sun and the only one in the Solar System without a considerable atmosphere. It is the smallest terrestrial planet of the Solar System and despite being also smaller than the Solar System objects Ganymede and Titan it is massive enough to have about the same surface gravity as the even larger planet Mars. </Description>
                    : useImage2 ? <Description> mars appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density. </Description> : 
                    useImage3 ? <Description> mars's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s. </Description> : null
                    }
                    <Source> Source: </Source>
                    <Wiki> Wikipedia </Wiki>
                    <ThreeButtons>
                        <Button onClick={onTap1} bg={useImage1 ? 'tt' : ''}> 01         OVERVIEW </Button>
                        <Button onClick={onTap2} bg={useImage2 ? 'tt' : ''}> 02         INTERNAL STRUCTRURE </Button>
                        <Button onClick={onTap3} bg={useImage3 ? 'tt' : ''}> 03         SURFACE GEOLOGY </Button>
                    </ThreeButtons>
                </RightText>
            </Body>
            <FooterHolder>
            {footeritems.map(el=>{
                return(
                    
                <Footer>
                <Tit> {el.title} </Tit>
                <Prop> {el.props} </Prop>
                </Footer>
                    
                )
            })}
            </FooterHolder>
        </Main>
    )
}
const FooterHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
margin-bottom: 50px;
`
const Footer = styled.div`
color: white;
border: 1px solid gray;
padding: 30px 60px 30px 20px;
margin-right: 15px;



`
const Prop = styled.div`
font-family: Antonio;
font-size: 40px
`
const Tit = styled.div`
color: gray;
font-family: spartan;
font-weight: 700;
font-size: 11px;
text-transform: uppercase;
`
const RightText = styled.div`
width: 40%; 
`
const ThreeButtons = styled.div`
margin-top: 20px;
`
const Button = styled.div<{bg: string}>`
padding: 15px;
border: 1px solid gray;
font-size: 11px;
margin-bottom: 15px;
width: 83.2%;
font-weight: 700;
color: lightgray;
letter-spacing: 2px;
transition: all 750ms;
background-color: ${({bg})=> bg ? "darkcyan": ''};
font-weight: ${({bg})=> bg ? "1000": '700'};
:hover{
    background-color: gray;
    cursor: pointer
}
`
const Body = styled.div`
display: flex;
width: 80%;
justify-content: space-around;
margin-left: 100px;
margin-top: 120px;
color: white;
font-family: Spartan;
align-items: center;
`
const Images = styled.img`
height: 250px;
width: 250px;
`
const Title = styled.div`
font-family: Antonio;
font-size: 50px;
margin-bottom: 20px;
text-transform: uppercase;
`
const Description = styled.div`
font-size: 12px;
color: lightgray;
width: 80%;
text-align: justify;
margin-bottom: 20px;
line-height: 20px;

`
const Source = styled.span`
font-size: 14px;
font-weight: 200;
`
const Wiki = styled.span`
font-size: 14px;
font-weight: 700;

text-decoration: underline;
`

const Main = styled.div`
  min-height: 100vh;
  
  width: 100%;
  /* background-color: #8ec5fc; */
  /* background-image: linear-gradient(62deg, #8ec5fc 0%, #f3c0c0 100%); */
  background-color: rgb(7,7, 34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



export default Mars