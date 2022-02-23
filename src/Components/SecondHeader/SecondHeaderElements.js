import React from "react";
import styled from "styled-components"
import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight'

function SecondHeaderElements() {
  return (
    <Wrapper>
      <Image src='./img/news-imgs/tnw-logo.png' />

      <Elements>
        <Link href='#'>Latest</Link>
        <Link href='#'>Gadgets & apps</Link>
        <Link href='#'>AI & futurism</Link>
        <Link href='#'>EVs & mobility</Link>
        <Link href='#'>Startups & growth</Link>
        <Link href='#'>Crypto & fintech</Link>
        <Link href='#'>Careers in tech</Link>
        <Link href='#'>More</Link>
      </Elements>

      {/* <ScrollRight>
        <ArrowDrop />
      </ScrollRight> */}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 90%;
  /* border: 1px solid red; */
  padding-left: 20px;
  padding-right: 10px;

  @media screen and (max-width: 1200px) {
    width: 95%;
    padding-right: 0px;
    /* margin-right: 30px; */
  }
`

export const Image = styled.img`
  width: 80px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Elements = styled.div`
  /* border: 3px solid green; */
  display: flex;
  justify-content: space-around;
  width: 950px;

  @media screen and (max-width: 1200px) {
    font-size: 13px;
    width: 800px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Link = styled.a`
  color: rgba(80,86,102,.75);
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  transition: color 125ms ease;

  :hover {
    color: #404040;
    transition: 0.5s;
  }

  @media screen and (max-width: 1200px) {
    font-size: 13px;
  }
`

export const ScrollRight = styled.div`
  border: 3px solid red;
`

export const ArrowDrop = styled(KeyboardArrowRight)`
  display: none;

  @media screen and (max-width: 895px) {
    display: initial;
    color: rgba(80,86,102,.75);
    border: 3px solid yellow;
    width: 57px;
    height: 56px;
  }
`

export default SecondHeaderElements;
