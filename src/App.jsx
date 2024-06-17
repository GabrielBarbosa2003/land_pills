import './App.css'
import './grid.css'
import './assets/fonts.css'
import hero from './assets/img/hero.png'
import load from './assets/img/load.png'
import { gsap } from "gsap";
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import  Menu from './components/Menu/index.jsx'





function App() {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    splitTextIntoSpans(".logo p")
    splitTextIntoSpans(".hero-copy h1")

    gsap.to(".img-holder img", {
      left: 0,
      stagger: 0.1,
      ease: "power4.out",
      duration: 1.5,
      delay: 3,
    });
    gsap.to(".img-holder img", {
      left: "110%",
      stagger: -0.1,
      ease: "power4.out",
      duration: 1.5,
      delay: 6,
    });

  })


  function splitTextIntoSpans(selector) {

    var element = document.querySelector(selector);
    if (element) {
      var text = element.innerText;
      var splitText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      element.innerHTML = splitText;
    }

  }

  var counterElement = useRef(null);

  var valor = 0


  function startLoader() {

    useEffect(() => {
      function updateCounter() {
        if (valor === 100) {
          animateText()
          return;
        }

        valor += Math.floor(Math.random() * 10) + 1
        valor = valor > 100 ? 100 : valor


        const htmlContent = valor
          .toString()
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("") + "<span>%</span>";

        if (counterElement.current) {
          counterElement.current.innerHTML = htmlContent;
          //console.log(counterElement.current.className)

        }


        var delay = Math.floor(Math.random() * 200) + 100;
        setTimeout(updateCounter, delay);


      }
      updateCounter()

    }, [])


    function animateText() {
      setTimeout(() => {
        gsap.to(".counter p span", {
          top: "-400px",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 1,
        });

        gsap.to(".logo p span", {
          top: "0",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 1,
        });

        gsap.to(".logo p span", {
          top: "-400px",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 1,
          delay: 3,
        });

        gsap.to(".overlay", {
          opacity: 0,
          ease: "power3.inOut",
          duration: 1,
          delay: 4,
          zIndex: -1
        });

        gsap.to(".hero img", {
          scale: 1,
          ease: "power3.inOut",
          duration: 2,
          delay: 3.5,
        });

        gsap.to(".hero-copy h1 span", {
          top: "120",
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 2,
          delay: 4,
        });

        gsap.to(".navbar", {
          top: "0",
          ease: "power3.inOut",
          duration: 2,
          delay: 4,
        });
      }, 100);
    }

  }
  startLoader();




let tela = window.innerWidth;
  return (
    <>
      <section className='home'>
        { tela <= 480 ? 
        <div className='menuu'>
          <Menu/>

        </div>
        
        :
        <nav className='navbar'>
        <div className='contact'>
          <a href='#'>Contact</a>
          <a href='#'>Contact</a>
        </div>

        <div className='logo'>
          <a href='#'>PILLS</a>
        </div>

        <div className='services'>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </div>
      </nav>
        
      }
       


        <div className='hero'>
          <img src={hero} alt='imagem de pilulas' />
        </div>

        <div className='mid_section'>

          <div className='left_section'>
            <div className='left_section_top'>
              <p>BRASIL</p>
              <div className='text_year'>
                <p>PILLS STUDY</p>
                <p><span>(20;23)</span></p>
              </div>

            </div>
            <div className='left_section_bottom'>
              <p>STUDY CASE</p>
              <div className='directby'>
                <p><span>DIRECT BY ARTHUR</span></p>
                <p>FT GABRIEL BARBOSA</p>
              </div>
            </div>

          </div>

          <div className='right_section'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
            <div className='right_bottom'>

              <a href='#'><button>Learn more</button></a>
            </div>
          </div>
        </div> 
        <div className="hero-copy">
          <h1>PILLS</h1>
        </div>


      </section>

      <div className="overlay">
        <div className="overlay-content">
          <div className="images">
            <div className="img-holder">
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
              <img src={load} alt="" />
            </div>
          </div>
          <div className="text">
            <div className="counter" >
              <p ref={counterElement}></p>
            </div>
            <div className="logo"><p>pills</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
