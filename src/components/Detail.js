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
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
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
`;
const TrailerButton = styled.button`  
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
`;
const AddButton = styled.button
`border-radius: 4px;
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
cursor: pointer;`;
const GroupWatchButton = styled.button`
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
cursor: pointer;`;
