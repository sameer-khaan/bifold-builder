import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavMenu from './components/nav-menu/nav'
import heroImg from './assets/white-background-shape-v2.png'
import glassDoorImg from './assets/front_door.gif'
import footerImg from './assets/footer.png'
import './App.css'
import './scss/style.scss'

const HeroShapeBg = styled.div`
  background: url(${heroImg});
`

function MainPage () {
  // useEffect(() => {
  //   init("user_yPy5jMIHEXG58TD9bfr90");
  // }, [])
  return (
    <div className='mainPage'>
      <HeroShapeBg className='HeroShapeBg'/>
      <section className='bifold-wrapper'>
        <NavMenu />
        <main className='buifold-content'>
          <div className='content__text'>
            <p>
              Easily design your bespoke bifold door and receive your free quote.
            </p>
            <p>
              Simply click the button below and follow the steps to view your desired door configuration using our online visualiser tool.
            </p>
            <Link to='/quote'>
              <button className='content__start-btn'>get started</button>
            </Link>
          </div>
          <div className='content__img'>
            <img
              className='glass-door__img'
              src={glassDoorImg}
              alt='glass-door__img'
            />
          </div>
        </main>
      </section>
      {/* <footer className="footer">
        <p>Powered by</p>
        <a href="https://essexwebdesignstudio.com/bifold-builder/" target="_blank">
          <img class="footer__logo" src={footerImg} alt="logo"></img>
        </a>
      </footer> */}
    </div>
  )
}

export default MainPage
