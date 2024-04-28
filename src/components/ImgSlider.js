import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
/**
  import "../imgslider.css";
*/
const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
          <img src="/images/slider-one.jpg" alt="" />
          <video
          controls
          playsInline={true}
          muted
          autoPlay = {true}
          src="/videos/onepiece.mp4"
          loop ={true}
        >
        </video>
        
      </Wrap>

      <Wrap>
       <Iimg src="/images/slider-two-women.jpg"></Iimg>
        <video
        controls
          playsInline={true}
          muted
          autoPlay = {true}
          src="/videos/amelia.mp4"
          loop ={true}
        >
        </video>


        
      </Wrap>

      <Wrap>
        
          <img src="/images/akatsuki.jpg" alt="" />
          <video
          
          playsInline={true}
          muted
          autoPlay = {true}
          src="/videos/akatsuki.mp4"
          loop ={true}
        >
        </video>
      </Wrap>
    </Carousel>
  );
};
/**
  const mystyle = {
   opacity: "0" ,
      height: "25rem",
      width: "100%",
       
    
  };
*/




const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;
const Iimg = styled.img`
    width: 100%;
    z-index : 1;
    opacity : 1;
    `;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  display:block;
 
 
  

    img {
      width: 100%;
      z-index : 1;
      opacity : 1;
    }
    
      
    video{
  position : absolute ;
  top : 0px;
  opacity: 0 ;
  height: 25rem;
  width: 100%;
  @media (max-width:768px){
    height : 100px;
  }

}

    &:hover {
      padding: 0, 0, 0, 10px;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    
  video{
    opacity :1;
  }
/**
  img{
    opacity : 0;
  }
*/

    }
  
`;

export default ImgSlider;
