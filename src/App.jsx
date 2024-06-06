import './App.css'
import './grid.css'
import './assets/fonts.css'
import hero from './assets/img/hero.png'
import load from './assets/img/load.png'

function App() {

  return (
    <>
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



      <div className='hero'>
        <img src={hero} alt='imagem de pilulas' />
      </div>

      <div className='mid_section'>

        <div className='left_section'>
          <div className='left_section_top'>
            <p>BRASIL</p>
            <div className='text_year'>
              <p>PILLS STUDY</p>
              <p1>(20;23)</p1>
            </div>

          </div>
          <div className='left_section_bottom'>
            <p>STUDY CASE</p>
            <div className='directby'>
              <p1>DIRECT BY ARTHUR</p1>
              <p>FT GABRIEL BARBOSA</p>
            </div>
          </div>

        </div>

        <div className='right_section'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        </div>
      </div>

      <div className="hero-copy">
        <h1>PILLS</h1>
      </div>
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
          <div className="counter"><p>100%</p></div>
          <div className="logo"><p>kudos</p></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
