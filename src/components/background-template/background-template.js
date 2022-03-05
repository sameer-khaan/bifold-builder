import React from 'react';
import NavMenu from '../nav-menu/nav';
import styled from 'styled-components';
import heroImg from '../../assets/white-background-shape-v2.svg';

const HeroShapeBg = styled.div`
  width: 1287px;
  height: 865px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${heroImg});
`;

export default function BackgroundTemplate() {
  return (
    <div className="mainPage">
      <HeroShapeBg />
      <section className='bifold-wrapper'>
        <NavMenu />
        
      </section>
    </div>
  )
}
