import React from 'react';
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="/images/boa-background.jpg" alt="img" />
            </Background>
            <ImageTitle>
                <img src="/images/bao-text.png" alt="" />
            </ImageTitle>
        </Container>
    );
}

export default Detail;


const Container = styled.div`
// min-height: calc(100vh - 70px);
position:relative;
// padding: 0 calc(3.5vw + 5px);
`
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
    // object-fit: cover;
    z-index-1;
}
`


const Background = styled.div`
position: fixed;
// top:0;
// left:0;
// bottom:0;
// right:0;
z-index-1;
opacity:0.8;
width: 100%;
height: 90%;



img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index-1;
}
`