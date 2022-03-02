import styled from "styled-components"


const Container = styled.div`
height: 100vh;
background-color: beige;
display:flex;

`;
const LeftSide = styled.div`
width:50%;
`;
const RightSide = styled.div`
height: 100vh;
width: 50%;
background-image: url("https://i.kym-cdn.com/entries/icons/facebook/000/034/915/vibingcatttt.jpg")
`;

const WelcomeTitle = styled.h1`

color: white;
font-weight: 800;
font-size: 30px;
`;

function LoginPage() {
    return (
        <Container>
            <LeftSide></LeftSide>
           <RightSide></RightSide>
        </Container>
    );
}





export default LoginPage;