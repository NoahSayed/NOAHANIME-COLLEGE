import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  console.log(movies, ":🛢️");

  return (
    <Container>
      <h4>Recommended for You </h4>
      <Content>
        <Wrap>
          <DetailsInside type="text" alt="notext">
            Naruto[a] is a Japanese manga series written and illustrated by
            Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young
            ninja who seeks recognition from his peers and dreams of becoming
            the Hokage, the leader of his village. The story is told in two
            parts – the first set in Naruto's pre-teen years, and the second in
            his teens. The series is based on two one-shot manga by Kishimoto:
            Karakuri (1995), which earned Kishimoto an honorable !
          </DetailsInside>
          <Link to="">
            <img
              src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?fit=1280%2C720&ssl=1"
              alt="jojoba"
            ></img>
          </Link>
        </Wrap>
        <Wrap>
          
          <img
            className="deathnote"
            src=" https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpghttps://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg "
            alt="jojoba"
          ></img>
          <DetailsInside type="text" alt="notext">
            Death Note is a Japanese manga series written by Tsugumi Ohba and
            illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen
            manga magazine Weekly Shōnen Jump from December 2003 to May 2006,
            with its 108 chapters collected in 12 tankōbon volumes. The story
            follows Light Yagami, a teen genius who discovers a mysterious
            notebook: the "Death Note", which belonged to the shinigami Ryuk,It
            gives Power!
          </DetailsInside>
        </Wrap>
        <Wrap>
          <img
            src="https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/18_09_2021_15_15_18_8414452.jpg?width=1280"
            alt="jojoba"
          ></img>

          <DetailsInside type="text" alt="notext">
            Haikyu!! (ハイキュー!!, Haikyū!!, from the kanji 排球 "volleyball")
            is a Japanese manga series written and illustrated by Haruichi
            Furudate. It was serialized in Shueisha's shōnen manga magazine
            Weekly Shōnen Jump from February 2012 to July 2020, with its
            chapters collected in 45 tankōbon volumes. The story follows Shoyo
            Hinata, a boy determined to become a great volleyball player despite
            his small stature.
          </DetailsInside>
        </Wrap>
        <Wrap>
          <DetailsInside type="text" alt="notext">
            Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin,
            lit. 'The Attack Titan') is a Japanese dark fantasy anime television
            series, adapted from the manga of the same name by Hajime Isayama,
            that premiered on April 7, 2013. It has aired on NHK General TV in
            Japan,[g] and Aniplus Asia in various Asia-Pacific countries.[h] In
            the United States and Canada, the series has been streamed on
            Crunchyroll, Funimation.
          </DetailsInside>
          <Link to="">
            <img
              className="AOT"
              src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpeg"
              alt="jojoba"
            ></img>
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};
const DetailsInside = styled.text`
  opacity: 0;
  z-index: 1;
  font-size: 0.9375rem;
  font-color: red;
  position: absolute;
  top: 0;
  padding: 6px;

  height: 100%;
  background-color: black;
  @media (max-width : 768px){
  font-size : 0.5rem;
  padding-left : 20px
 }
  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 0;
    top: 0;
  }

  .deathnote {
    height: 660px;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
  .AOT {
    height: 280px;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Recommends;
