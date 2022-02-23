import React from "react";
import FirstHeaderElements from '../Components/FirstHeader/FirstHeaderElements'
import SecondHeaderElements from '../Components/SecondHeader/SecondHeaderElements'
import Event from '../Components/SecondHeader/Event'

function HeaderCompound() {
  return (
    <>
      <FirstHeaderElements />
      <SecondHeaderElements />
      <Event />
    </>
  );
}

export default HeaderCompound;
