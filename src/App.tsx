import styled from "styled-components";
import {
  AiFillPlayCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
import vid from "./assets/video1.webm";
import vid1 from './assets/What A Beautiful Name - Hillsong Worship.mp4'
import vid2 from './assets/no (2).mp4'

const App = () => {
  const [setState, newState] = useState<boolean>(true);
  const [showVideo, setShowVideo] = useState<boolean>(false);


  const [items, setMyVideo] = useState([
    
      {title: 'First Video', desc: 'First Artiste', color: 'darkblue', video:vid},
      {title: 'Second Video', desc: 'Second Artiste', color: 'lightblue', video:vid1},
      {title: 'Third Video', desc: 'Third Artiste', color: 'darkgreen', video:vid2},
    ]
  )

  let i = Math.floor(Math.random()*3)
  let video = items.map(el=>{
    return el.video
  })[i] 
  
  const onshowVideo = () => {
   
    
    setShowVideo(!showVideo);
  };

  const onToggle = () => {
    newState(!setState);
  };

  return (
    <Main>
      <Container>
        <BigText> Ehiabhi Precious Osaze </BigText>
        {items.map((el)=>{
          return(
            <Holder>
          <VideoClip onClick={
            ()=>{
              video = el.video
              onshowVideo(); 
              
            }
          } bg={el.color}>
            <Icon1 size={40}></Icon1>
          </VideoClip>
          <VideoContent>
            {el.title}
            <VideoSub>
              {el.desc}
            </VideoSub>
          </VideoContent>
          <Button
            onClick={() => {
              onToggle();
            }}
          >
            {setState ? <Icon2 size={40}></Icon2> : <Icon3 size={40}></Icon3>}
          </Button>
        </Holder>
          )
        })}
        {showVideo ? (
          <Div2>
            <BackDrop onClick={()=>{onshowVideo()}}>
            
            <Icon4 size={30} onClick={()=>{onshowVideo()}}> </Icon4>
          </BackDrop>
          <Video src={video} controls autoPlay playsInline />
          
          </Div2>
          
        ) : null}
      </Container>
    </Main>
  );
}

export default App;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon4 = styled(AiOutlineClose)`
  position: absolute;
  right: 30px;
  top: 30px;
  transition: all 350ms;
  color: red;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const BackDrop = styled.div`
  background: rgba(255, 255, 255, 0.25);
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Video = styled.video`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
  object-fit: cover;
  z-index: 3;
  position: absolute;
  top: 10%
`;
const Button = styled.span``;

const Main = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: #8ec5fc; */
  /* background-image: linear-gradient(62deg, #8ec5fc 0%, #f3c0c0 100%); */
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 60vh;
  width: 60%;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
  position: relative;
`;
const BigText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon1 = styled(AiFillPlayCircle)`
  opacity: 0.4;
  transition: all 350ms;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
const Icon3 = styled(AiFillHeart)`
  padding: 10px;
  border-radius: 50%;
  color: red;
  :hover {
    opacity: 0.9;
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Icon2 = styled(AiOutlineHeart)`
  padding: 10px;
  border-radius: 50%;
  :hover {
    opacity: 0.9;
    background-color: lightgray;
    cursor: pointer;
  }
`;
const VideoContent = styled.div`
  flex: 1;
  margin-left: 15px;
  font-weight: 700;
  font-size: 18px;
`;
const VideoClip = styled.div<{bg: string}>`
  height: 90px;
  width: 150px;
  margin-bottom: 14px;
  background-color: ${({bg})=>bg};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoSub = styled.div`
  font-weight: 200;
  font-size: 14px;
`;
