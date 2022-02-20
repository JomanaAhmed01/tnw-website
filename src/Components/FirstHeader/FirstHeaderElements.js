import React from "react";
import styled from "styled-components"
import { Search } from '@styled-icons/fluentui-system-filled/Search'
import { Menu } from '@styled-icons/entypo/Menu'

function FirstHeaderElements() {
  return (
    <Wrapper>
      {/* <Image src='./img/news-imgs/tnw-logo.png' /> */}

      <LeftSideElements>
        <Link href="#">News</Link>
        <Link href="#">Events</Link>
        <Link href="#">Spaces</Link>
        <Link href="#">Programs</Link>
        <Link href="#">Volunteer</Link>
        <NewsLink href="#">News</NewsLink>
      </LeftSideElements>


      <RightSideElements>
        <Link href="#">NewsLetters</Link>
        <Link href="#">Partner with us</Link>
        <SearchIcon />
        <MenuIcon />
      </RightSideElements>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 1023px) {
    border: 1px solid red;
  }
`

export const LeftSideElements = styled.div`
  /* border: 3px solid black; */
`

export const RightSideElements = styled.div`
  /* border: 3px solid yellow; */
`

export const Link = styled.a`
  /* border: 3px solid purple; */
  font-size: 14px;
  color: #a6a9b1;
  font-weight: bold;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  transition: color 125ms ease;

  :hover {
    color: #000000;
    transition: 0.5s;
  }


  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const SearchIcon = styled(Search)`
  /* border: 3px solid yellow; */
  width: 25px;
  cursor: pointer;

  :hover {
    color: #4d4dff;
  }
`

export const Image = styled.img`

  /* display: none; */

  /* @media screen and (max-width: 1023px) {
    display: initial;
    border: 3px solid black;
  } */
`

export const NewsLink = styled.a`
  display: none;

  @media screen and (max-width: 1023px) {
    display: initial;
    text-decoration: none;
    color: #000000;
    font-size: 14px;
    padding-left: 50px;
  }
`

export const MenuIcon = styled(Menu)`
  display: none;

  @media screen and (max-width: 1023px) {
    display: initial;
    width: 25px;
    padding-left: 10px;
  }
`

export default FirstHeaderElements;
