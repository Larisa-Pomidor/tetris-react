import styled from "styled-components";
import bgImage from '../../img/tetris-bg.jpg'

export const StyledTetrisWrapper = styled.div`
width: 100%;
height: 100vh;
background: url(${bgImage}) #000;
background-size: cover;
overflow: hidden;
position: relative;

&:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    top: 0;
    left: 0;
}
`

export const StyledTetris = styled.div`
display: flex;
align-items: flex-start;
padding: 40px;
margin: 0 auto;
max-width: 900px;
position: relative;
z-index: 3;

& aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px
}
`
