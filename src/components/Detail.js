import React from 'react';
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="/images/2019-12-08.png" alt="" />
            </Background>
        </Container>
    );
}

export default Detail;


const Container = styled.div`
min-height:calc(100 -70px);
pdding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index-1;
opacity:0.8;
`