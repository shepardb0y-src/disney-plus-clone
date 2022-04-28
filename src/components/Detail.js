import React from 'react';
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="/images/2019-12-08.png" alt="img" />
            </Background>
        </Container>
    );
}

export default Detail;


const Container = styled.div`
min-height: calc(100vh - 70px);
position:relative;
padding: 0 calc(3.5vw + 5px);
`


const Background = styled.div`
position: fixed;
// top:0;
// left:0;
// bottom:0;
// right:0;
z-index-1;
opacity:0.8;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index-1;
}
`