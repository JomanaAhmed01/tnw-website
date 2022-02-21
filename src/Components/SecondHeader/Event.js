import React from "react";
import styled from "styled-components"

function SecondHeaderElements() {
    return (
        <Wrapper>
          <Text>Ask Edward Snowden anything during his talk at TNW Conference 2022 →</Text>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  background-color: #FFDD33;
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 14px;
`

export default SecondHeaderElements;
