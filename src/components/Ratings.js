import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const animeList = [
  { name: 'One Piece', image: 'https://upload.wikimedia.org/wikipedia/en/6/65/One_Piece_Anime.jpg' },
  { name: 'Death Note', image: 'https://i.pinimg.com/474x/b0/2c/4b/b02c4b936dfa3b59bae26ffba85b3f3b.jpg' },
  { name: 'Naruto', image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { name: 'Attack on Titan', image: 'https://i.pinimg.com/474x/39/08/f4/3908f4e468ccb9e809da7f37e3a38c65.jpg' },
  { name: 'Demon Slayer', image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg' },
  { },
  { },
  { },
  { name: 'Jujutsu Kaisen', image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Jujutsu_kaisen.jpg' },
  { name: 'Tokyo Ghoul', image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Tokyo_Ghoul_volume_1_cover.jpg' }
];

function getRandomRating() {
  return (Math.random() * 5).toFixed(1);
}

function Ratings() {
  const [ratings] = useState(
    animeList.map(anime => ({ ...anime, rating: getRandomRating() }))
  );

  return (
    <Container>
      <h4>Trending </h4>
      <Content>
        <Wrap>
          <Link to="https://one-piece.com/">
            <img
              src="https://i0.wp.com/oyster.ignimgs.com/wordpress/stg.ign.com/2021/02/jujutsu-kaisen.jpg?w=1000&ssl=1"
              alt="jojoba"
            ></img>
          </Link>
          <Detailsinside2 type="text" alt="notext">
            One Piece (stylized in all caps) is a Japanese manga series written
            and illustrated by Eiichiro Oda. It has been serialized in
            Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997,
            with its individual chapters compiled into 104 tankōbon volumes as
            of November 2022.
          </Detailsinside2>
        </Wrap>
        <Wrap>
          <Link to="">
            <img
              className="deathnote"
              src=" https://qph.cf2.quoracdn.net/main-qimg-83a1cd5dcdd8e647d8ae25417334424e-lq "
              alt="jojoba"
            ></img>
            <Detailsinside2 type="text" alt="notext">
              Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, "Blade
              of Demon Destruction"[4]) is a Japanese manga series written and
              illustrated by Koyoharu Gotouge. It follows teenage Tanjiro
              Kamado, who strives to become a demon slayer after his family was
              slaughtered and his younger sister, Nezuko, turned into a demon.
            </Detailsinside2>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen">
            <img
              src="https://m.media-amazon.com/images/I/81rEhhwbubL.jpg"
              alt="jojoba"
            ></img>
          </Link>
          <Detailsinside2 type="text" alt="notext">
            Jujutsu Kaisen (呪術廻戦) is a Japanese manga series written and
            illustrated by Gege Akutami. It has been serialized in Shueisha's
            shōnen manga magazine Weekly Shōnen Jump since March 2018, with its
            chapters collected and published in 21 tankōbon volumes as of
            December 2022.
          </Detailsinside2>
        </Wrap>
        <Wrap>
          <Link to="https://hunterxhunter.fandom.com/wiki/Gon_Freecss">
            <img
              className="AOT"
              src="https://wallpapercave.com/wp/wp6584169.jpg"
              alt="jojoba"
            ></img>
          </Link>
          <Detailsinside2 type="text" alt="notext">
            Gon Freecss (ゴン゠フリークス, Gon Furīkusu) is a Rookie Hunter and
            the son of Ging Freecss. Finding his father is Gon's motivation in
            becoming a Hunter.
          </Detailsinside2>
        </Wrap>
      </Content>
    </Container>
  );
};
const Detailsinside2 =  styled.text`
  opacity: 0;
  z-index: 1;
  font-size: 0.9375rem;
  font-color: red;
  position: absolute;
  top: 0rem;
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
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 0;
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

export default Ratings;
