import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import NavMenu from '../../components/nav-menu/nav';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import heroImg from '../../assets/white-background-shape-v2.png';
import footerImg from '../../assets/footer.png'
import './contact-style.scss';

const HeroShapeBg = styled.div`
  background: url(${heroImg});
`;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_s3ahhv9', 'template_8r1u4wm', e.target, 'user_yPy5jMIHEXG58TD9bfr90')
      .then((result) => {
          SuccefullMail()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  const SuccefullMail = () => {
    return (
      <div className='form'>
        <div className='succefull-email'>
          <div className='cheked-icon'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
              <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
            </svg>
          </div>
          <h3>We received your details</h3>
          <p>Our team will contact you shortly!</p>
          <div className='home-btn'>
            <Link to='/'><button>Main Page</button></Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mainPage">
      <HeroShapeBg className='HeroShapeBg'/>
      <section className='bifold-wrapper'>
        <NavMenu />
        <main className='buifold-content__pages'>
          <div className='pages-title'>
            <h1>Contact Us</h1>
          </div>
          <div className='pages-wrapper'>
            <div className="contact__page">
              <form onSubmit={sendEmail} className='contact-form'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Full Name'
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='text'
                  id='message'
                  name='message'
                  placeholder='Message'
                  onChange={(e) => setMessage(e.target.value)}
                />
                <input className='submit-btn' type='submit' value='Send Message' onClick={SuccefullMail}/>
              </form>
            </div>
          </div>
        </main>
      </section>
      <footer className="footer">
        <p>Powered by</p>
        <a href="https://essexwebdesignstudio.com/bifold-builder/" target="_blank">
          <img class="footer__logo" src={footerImg} alt="logo"></img>
        </a>
      </footer>
    </div>
  )
}


