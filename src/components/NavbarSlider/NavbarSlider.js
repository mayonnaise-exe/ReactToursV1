import React from "react";
import OverlayContainer from "hero-slider";
import MenuNav from "hero-slider";
import HeroSlider from "hero-slider";
import Slide from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper.js";
import Title from "../UI/Title/Title.js";
import Subtitle from "../UI/Subtitle/Subtitle.js";

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function NavbarSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title> </Title>
          <Subtitle> </Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        backgroundImageSrc="public/images/img-2.jpg"
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        backgroundImageSrc="public/images/img-8.jpg"
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        backgroundImageSrc="public/images/img-9.jpg"
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        backgroundImageSrc="public/images/img-home.jpg"
      />

      <MenuNav />
    </HeroSlider>
  );
}
