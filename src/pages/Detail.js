import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="/images/boa-background.jpg" alt="img" />
      </Background>
      <ImageTitle>
        <img src="/images/bao-text.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitles>
       2018 * 7m * Family, Fantasy, Kids, Animation
      </Subtitles>
      <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellat iusto sequi nam explicabo doloribus reiciendis. Atque optio, dolore facere corrupti soluta harum laborum eos.
          </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  // min-height: calc(100vh - 70px);
  position: relative;
  
  // padding: 0 calc(3.5vw + 5px);
  
`;
const ImageTitle = styled.div`
height:100vh;
width:100vw;
z-index-1;
position:fixed;
img{
    top:10;
    right:10;
    margin-top:5%;
    width: 30%;
    height: 30%;
    object-fit: contain;
    z-index-1;
}
`;

const Background = styled.div`
  position: fixed;
  // top:0;
  // left:0;
  // bottom:0;
  // right:0;
  z-index: -1;
  opacity: 0.8;
  width: 100%;
  height: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
const Controls = styled.div`
  display: flex;
  cursor: pointer;
  align-items:center;
  margin-left:20px;
  
  
`;
const PlayButton = styled.button`
  border-radius: 4px;
  margin-top: 275px;
  font-size: 15px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  margin-right: 22px;
  // z-index:-1;
  cursor: pointer;
  
  &:hover{
      background: rgb(198,198,198);
  }
`;
const TrailerButton = styled(PlayButton)`  
background: rgb(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249, 249, 249);
text-transform:uppercase;
`;
const AddButton = styled.button`
width:44px;
height:44px;
display-flex:
align-items:center;
justify-content:center;
border-radius:50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor:pointer;
margin-right:16px;
span{
    font-size:30px;
    color:white;
}
margin-top: 275px;
`
const GroupWatchButton = styled(AddButton)`
display: flex;
background: rgba (0, 0, 0);


`
const Subtitles = styled.div`
margin-left:20px;
color:rgb(249, 249, 249);
font-size:15px;
min-height:20px;
margin-top:26px;

`
const Description = styled.div`
margin-top:16px;
line-height:1.4;
margin-left:20px;
color: rgb(249, 249, 249);

`
