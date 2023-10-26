import React, { useEffect, useState } from 'react'; 
import './App.css';
import abhiImage from "./Benarji.jpg"; 

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header>
        <div className="user">
          <img src={abhiImage} alt="Benarji" />
          <h3 className="name">Benarji</h3>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className='navlink'><a href="#home">HOME</a></li>
            <li className='navlink'><a href="#about">ABOUT</a></li>
            <li className='navlink'><a href="#education">EDUCATION</a></li>
            <li className='navlink'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>HELLO!!</h3>
        <h1>This is <span>Benarji</span></h1>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> <span>About</span> me </h1>
        <div className="row">
          <div className="info">
            <h3> <span> Name : </span>Benarji</h3>
            <h3> <span> Qualification : </span> B.Tech </h3>
            <h3> <span> Address</span> Vijayawada</h3>
            <h3> <span> Strengths : </span> SmartWork,Grasping power  </h3>
            <h3> <span> Hobbies: </span> Listening to Music,Reading ,learning new things</h3>
            <h3> <span> Language : </span> Telugu, Hindi, English </h3>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading"> Education <span>Details</span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018-2019</span>
            <h3>SSC</h3>
            <p style={{ fontSize: '20px' }}>SriChaitanya Techno school</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019-2021</span>
            <h3>Intermediate</h3>
            <h3>MPC</h3>
            <p style={{ fontSize: '20px' }}>S.V.L Kranthi junior clg</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021-2025</span>
            <h3>B.Tech</h3>
            <h4> </h4>
            <p style={{ fontSize: '20px' }}>VIT AP University</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> me </h1>
        <div className="row">
          <div className="content">
            <h3 className="title">contact info</h3>
            <div className="info">
              <h3> <i className="fas fa-envelope"></i> benarji.21bce9551@vitapstudent.ac.in</h3>
              <h3> <i className="fas fa-phone"></i> 9553774519 </h3>
              <h3> <i className="fas fa-map-marker-alt"></i> Vijayawada</h3>
            </div>
          </div>
        </div>
      </section>

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={abhiImage} alt="" />
        </a>
      )}
    </div>
  );
}

export default App;