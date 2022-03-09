import React from "react";
import styled from "styled-components"

function MostPopular() {
  return (
    <>
      <Header>
        Most popular stories today
      </Header>
      <Wrapper>
        <StoryWrapper>
          <ImageLink href='#'><Image src='./img/news-imgs/1.jfif' /></ImageLink>
          <Text href='#'>We tried a bunch of free Windows apps from the Microsoft Store — here are our favorites</Text>
        </StoryWrapper>

        <StoryWrapper>
          <ImageLink href='#'><Image src='./img/news-imgs/16.jfif' /></ImageLink>
          <Text href='#'>Your brain might be a quantum computer that hallucinates math</Text>
        </StoryWrapper>

        <StoryWrapper>
          <ImageLink href='#'><Image src='./img/news-imgs/12.jfif' /></ImageLink>
          <Text href='#'>Here’s why your car isn’t rolling on airless tires… yet</Text>
        </StoryWrapper>

        <StoryWrapper>
          <ImageLink href='#'><Image src='./img/news-imgs/17.jfif' /></ImageLink>
          <Text href='#'>You can select all your typed text by tapping thrice on iOS</Text>
        </StoryWrapper>

        <StoryWrapper>
          <ImageLink href='#'><Image src='./img/news-imgs/13.jfif' /></ImageLink>
          <Text href='#'>Brace yourselves, Trump has just launched his social network</Text>
        </StoryWrapper>
      </Wrapper>
    </>
  );
}

export const Header = styled.h3`
  /* border: 3px solid blue; */
  text-align: center;

  @media screen and (max-width: 1023px) {
    text-align: left;
    padding-left: 20px;
  }
`

export const Wrapper = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

export const StoryWrapper = styled.div`
  border: 3px solid red;
  width: 70%;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 1023px) {
    /* justify-content: space-around; */
    /* display: flex; */
    width: 90%;
  }
`

export const ImageLink = styled.a`
  
`

export const Image = styled.img`
  border: 3px solid blue;
  width: 100%;
  padding-bottom: 10px;

  @media screen and (max-width: 1023px) {
    width: 30%;
  }
`

export const Text = styled.a`
  border: 3px solid green;
  width: 83%;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    text-decoration-color: #ebadd6;
    text-decoration-thickness: 2px;
  }

  @media screen and (max-width: 1023px) {
    width: 70%;
  }
`

export default MostPopular;