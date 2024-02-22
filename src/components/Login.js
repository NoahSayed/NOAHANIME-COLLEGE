import styled from "styled-components";
import { auth, provider } from "../firebase";


const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
        <Text> NoaHAnimE</Text>

          <SignUp href="/Home.js  " >Dont Want to Sign Up</SignUp>
          
         
          <Description>
           Get a list of Top anime here including Noah's favourites. Highly recommended top
           watch and if you dont like it then you should probably stop watching . Anime is not 
           for You
          </Description>

         
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Text = styled.text`
color :  #fff;
font-family : Avenir-Roman, sans-serif;
font-size : 100px;
font-weight : 590;
text-decoration-line: underline;
text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;

@media (max-width : 768px){
  font-size:55px;
}
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://wallpaperaccess.com/full/435.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  @media (max-width : 768px){
    position :absolute;
    left : -280px;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;

`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inli ne-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
