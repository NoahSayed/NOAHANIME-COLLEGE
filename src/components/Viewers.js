import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <video controls autoPlay={true} muted loop={true} playsInline={true}>
          <source src="/videos/blackclover.mp4" type="video/mp4" />
        </video>
        <h1 className="Title">BlackCLoVer</h1>
      </Wrap>
      <Wrap>
        <video controls autoPlay={true} loop ={true} playsInline={true}>
          <source src="/videos/suzume-trailer-crop.mp4" type="video/mp4" />
        </video>
        <h1 className="Anima"></h1>
      </Wrap>
      <Wrap>
        <video muted controls autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/bluelock-trailer-crop.mp4" type="video/mp4" />
        </video>
        <h1>BlueLock</h1>
      </Wrap>
   
    </Container>
  );
};

const Container = styled.div`
margin-top : 30px;
 display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 3fr));
  }
`;
const Wrap2 = styled.div`
 display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
position: absolute;
width : 0px;
height : 0px;


  /**
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
  */

@media (max-width : 768px){
  position : relative;
  width : 100%;
  
  padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
}


h1{
  z-index : 1;
  position : absolute;
  top : 0;
  padding : 1.5625rem;
  object-fit: cover;
  transition: opacity 500ms ease-in-out 0s;
  font-size : 5.5rem;
  text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;
  opacity : 0;
  
  @media (max-width : 768px){
  padding-left : 20px;
  font-size : 1.5rem;
  opacity:1;
  
                            }
}

 /* playi text after and removing it in seconds */

/**
  h1.anima {
    
      -o-animation: cssAnimation 0s ease-in 5s forwards;
     
  }
  @keyframes cssAnimation {
      to {
          width:0;
          height:0;
          overflow:hidden;
      }
  }
  @-webkit-keyframes cssAnimation {
      to {
          width:0;
          height:0;
          visibility:hidden;
      }
  }
*/







h1.Title{
  z-index : 1;
  position : absolute;
  top : 3rem;
  
  padding : 0px 1.5625rem;
  transition: opacity 500ms ease-in-out 0s;
  font-size : 4.0rem;
  text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;
  @media (max-width : 768px){
  font-size : 1px;
  position : absolute;
  top : 30px;
  left : -10px;
 }


}
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
  
    position: absolute;
    top: 0px;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

  
  }
`;


const Wrap = styled.div`
 display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);



h1{
  z-index : 1;
  position : absolute;
  top : 0;
  padding : 1.5625rem;
  object-fit: cover;
  transition: opacity 500ms ease-in-out 0s;
  font-size : 5.5rem;
  text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;
  @media (max-width : 768px){
  padding-left : 20px;
  font-size : 25px;
                            }
}

/**
  section.Title2{
  opacity : 0;
  }
  video.Title2{
    opacity : 0;
  
  }
  h1.Title2{
    opacity : 0;
  
  }
  Wrap.Title2{
    opacity:0;
  }
*/

h1.Title{
  z-index : 1;
  position : absolute;
  top : 3rem;
  
  padding : 0px 1.5625rem;
  transition: opacity 500ms ease-in-out 0s;
  font-size : 4.0rem;
  text-shadow: 1px 1px 2px black , 0 0 2em black, 0 0 0.2em black , 0 0 0.2em black , 0 0 0.2em black;
  @media (max-width : 768px){
  font-size : 20px;
  position : absolute;
  top : 30px;
  left : -10px;
 }

}
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

  
  }
`;

export default Viewers;
