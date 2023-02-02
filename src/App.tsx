import React from 'react';
import Menu from './Components/Header/Menu';
import Main from './Components/Main/Main';
import ChooseClass from './Components/ChooseClass/ChooseClass';
import styled from 'styled-components';
import OurStats from './Components/OurStats/OurStats';
import BestInstruction from './Components/BestInstruction/BestInstruction';
import NewExperience from './Components/NewExperience/NewExperience';
import Pricing from './Components/Pricing/Pricing';
import { Trainer } from './Components/Trainer/Trainer';

const AppStyle = styled.div`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    background-image: url(/background.png);
    width: 842px;
    height: 726px;
    background-repeat: no-repeat;
    z-index: 1;
    right: -506px;
    top: 26%;
  }
`;

function App() {
  return (
    <AppStyle>
      <Menu />
      <Main />
      <ChooseClass />
      <OurStats />
      <BestInstruction />
      <NewExperience />
      <Pricing />
      <Trainer />
    </AppStyle>
  );
}

export default App;
