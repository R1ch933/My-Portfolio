import React from 'react';
import './App.css';
import {Facebook, GitHub, Linkedin, X, Phone, Mail, ArrowRight, ArrowLeft} from 'react-feather'
import profile from './images/Profile.jpg'
import aboutMePhoto from './images/AboutMe_Photo.jpg'
import pdf from './images/Resume.pdf'
import project1 from './images/Project_1-1.PNG'
import project2 from './images/Project_3-1.PNG'
import project3 from './images/Project_2-1.PNG'
import ReactPlayer from 'react-player';


function App() {

  const [flash, setFlash] = React.useState(0)
  const [pos, setPos] = React.useState({posb: '-150vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '-150vw', proj:""});
  const [count, setCount] = React.useState(0)

  const setPositionProj1 = () => 
     setPos({posb: '0vw', posproj1: '5vw', posproj2: '-150vw', posproj3: '-150vw', proj:0});
  const setPositionProj2 = () => 
     setPos({posb: '0vw', posproj1: '-150vw', posproj2: '5vw', posproj3: '-150vw', proj:1});
  const setPositionProj3 = () => 
    setPos({posb: '0vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '5vw', proj:2});

  const retractPosition = () => setPos({posb: '-150vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '-150vw', proj:""});

  

  const goToHome = () => window.scrollTo(0,0);
  const goToAbout = () => window.scrollTo(0,window.innerHeight)
  const goToProjects = () => {window.scrollTo(0,(window.innerHeight*2.1))}

  
  


  return (
    <div className="App">
      <NavBar goToHome={goToHome} goToAbout={goToAbout} goToProjects={goToProjects}/>
      <Header />
      <div className="infoBackground">
        <About flash={flash}setFlash={setFlash}/>
        <Projects setPosition={setPositionProj1} setPosition2={setPositionProj2} setPosition3={setPositionProj3}/>
      </div>
      <div className="projectHolder" style={{left: pos.posb}}>
        <div className="xButton" onClick={retractPosition}>
          <X width="5vw" height="auto" color="gray"/>
        </div>
        <ProjectOne pos={pos} setPosition2={setPositionProj2} setPosition3={setPositionProj3}/>
        <ProjectTwo pos={pos} setPosition={setPositionProj1} setPosition3={setPositionProj3}/>
        <ProjectThree pos={pos} setPosition={setPositionProj1} setPosition2={setPositionProj2}/>
      </div>
    </div>
  );
}

const NavBar = ({goToAbout,goToHome,goToProjects}) => 
  <div className="navigationBar">
    <div className="Home" onClick={goToHome}>
      <a >Home</a>
    </div>
    <div className="About" onClick={goToAbout}>
      <a >About</a>
    </div>
    <div className="Projects" onClick={goToProjects} >
      <a >Projects</a>
    </div>
    <div className="About" >
      <a href={pdf} target="_blank" >Resume</a>
    </div>
  </div>

const Header = () => 
  <div className="headerBox">
    <div className="titleText"> 
      <p style={{margin:"0"}}>I'm Richard Her</p>
    </div>
    
    <div className="briefAbout" style={{margin:"0vh"}}>
      <p>Django | HTML/CSS | Javascript | Kivy | Python | React</p>
      <p style={{marginTop:"0vh", fontSize:"3vh"}}><Phone width="3vmin" height="auto" /> 913-749-8200</p>
      <p style={{marginTop:"0vh", fontSize:"3vh"}}><Mail width="3vmin" height="auto"  /> richardher32@gmail.com</p>
    </div>
    <div className="socialMediaBox">
      <div id="firstIcon" className="icon">
        <a style={{color:"white"}} href="https://www.facebook.com/richard.her.10/">
          <Facebook style={{height: "5vmin", width: "5vmin"}} />
        </a>
      </div>
      <div className="icon">
        <a style={{color:"white"}} href="https://github.com/R1ch933">
          <GitHub style={{height: "5vmin", width: "5vmin"}}/>
        </a>
      </div>
      <div className="icon" style={{marginRight:"0vw"}}>
        <a style={{color:"white"}} href="https://www.linkedin.com/in/richard-her-1bb18518a/">
          <Linkedin style={{height: "5vmin", width: "5vmin"}}/>
        </a>
      </div>
    </div>
  </div>

const About = ({flash, setFlash}) =>
  <div style={{paddingTop:"5vh"}} id="About">
    <div>
      <h1 className="subTitle">About Me</h1>
    </div>
    <img src={aboutMePhoto} style={{width:"auto",height:"15vw"}} />
    <div>
      <div className="aboutMeText">
        <p>My name is Richard Her. I grew up in Wyandotte County in Kansas City, Kansas.
          I became a computer programmer because its utility fascinated me. From video games to web
          applications, I wanted to know how to do it all. The more I learn, the more I realize how much
          I don't know and the more I want to close the gap.
        </p>
      </div>
    </div>
    <div style={{marginTop:"10vh"}}>
      <h1 className="subTitle">Education</h1>
    </div>
    <div >
      <div className="aboutMeText">
        <p >I graduated from Sumner Academy of Arts and Science in 2019. I am now in my sophmore year at
          Kansas City, Kansas Community College pursuing my technical's associates. I am planning to continue
          my education at Park University to get a bachelor's in computer science.
        </p>
        <p >Click <a className="link" flash={flash} onAnimationEnd={()=>setFlash(0)}href={pdf} target="_blank">
          HERE</a> to download my resume
        </p>
      </div>
    </div>
  </div>

const Projects = ({setPosition,setPosition2,setPosition3}) => 
  <div className="projects">
    <div>
      <h1 style={{fontSize:"5vmin"}}>Projects</h1>
    </div>
    <div style={{float:"left"}}>
      <img onClick={setPosition}className="projectIcons" src={project1} style={{width:"25vw",height:"auto", marginLeft:"22.5vw"}}/>
      <img onClick={setPosition2} className="projectIcons" src={project2} style={{width:"25vw",height:"auto"}}/>
      <div className="projectIconDiff"onClick={setPosition3} style={{height:"fit-content", width:"25vw", backgroundColor:"black",marginLeft:"37.5vw", marginTop:"5vh"}}>
      <img src={project3} style={{width:"8.25vw",height:"auto"}}/>
      </div>

    </div>
  </div>

const ProjectOne = ({pos, setPosition2, setPosition3}) =>
  <div className="showProj1" style={{left: pos.posproj1}} >
    <div className="left" onClick={setPosition3}>
      <ArrowLeft height="5vmin" width="auto" color="gray"/> 
    </div>
    <div className="right" onClick={setPosition2}>
     <ArrowRight height="5vmin" width="auto" color="gray"/>
    </div>
  <div className="project1Title"style={{position:"relative", height:"5vh", color:"white"}}>
    
    <h3 style={{fontSize: "3vh"}}>Project 1: Reference-Dojo Web Application (Django)</h3>
  </div>
  <div className="imageBox">
    <img style={{width: "100%",height:"auto"}} src={project1}/>
  </div>
  <div className="textBox" style={{textAlign:"left"}}>
    <p style={{fontSize:"3vmin", marginLeft:"5px"}}>A web application created using the Django framework. It is deployed as an application on Heroku
      with its domain name being <a target="_blank" href="http://reference-dojo.herokuapp.com/">reference-dojo.herokuapp.com</a>. Users can create accounts to upload
      a word document file and store them on this website. Selecting uploaded documents will allow
      users to see a list of MLA style citations used in the file itself. The files can then be downloaded or 
      deleted off of the database. 
    </p>
  </div>

  </div>

const ProjectTwo = ({pos, setPosition3, setPosition}) =>
  <div className="showProj1" style={{left: pos.posproj2}} >
  <div className="left" onClick={setPosition}>
      <ArrowLeft height="5vmin" width="auto" color="gray"/> 
    </div>
    <div className="right" onClick={setPosition3}>
     <ArrowRight height="5vmin" width="auto" color="gray"/>
  </div>
  <div style={{position:"relative", height:"5vh", color:"white"}}>
    <h3 style={{fontSize: "3vh"}}>Project 2: Don't Let It Rain Game (React)</h3>
  </div>
  <div className="imageBox">
    <img style={{width: "100%",height:"auto"}} src={project2}/>
  </div>
  <div className="textBox" style={{textAlign:"left"}}>
    <p style={{fontSize:"3vmin", marginLeft:"5px"}}>A small game created using the React framework and deployed using firebase. It is heavily based off of the hangman game and can be
      reached at <a href="https://don-t-let-it-rain.firebaseapp.com/" target="_blank">don-t-let-it-rain.firebaseapp.com</a>. It has a simplistic and interactive UI. Players can use 
      hint coins to reveal characters of the word. This project was done to experiment more with animations and the
      backend of React, the latter being productively more challenging than I had assumed.
    </p>
  </div>

  </div> 

const ProjectThree = ({pos, setPosition, setPosition2}) =>
<div className="showProj1" style={{left: pos.posproj3}} >
  <div className="left" onClick={setPosition2}>
      <ArrowLeft height="5vmin" width="auto" color="gray"/> 
    </div>
    <div className="right" onClick={setPosition}>
     <ArrowRight height="5vmin" width="auto" color="gray"/>
  </div>
<div style={{position:"relative", height:"5vh", color:"white"}}>
  <h3 style={{fontSize: "3vh"}}>Project 3: Master Password Android App (Kivy)</h3>
</div>
<div className="imageBox">
  <ReactPlayer url="https://youtu.be/WByDfL1Ayts" width="45vw" height="50vh"/>
</div>
<div className="textBox" style={{textAlign:"left"}}>
  <p style={{fontSize:"3vmin", marginLeft:"5px"}}>An android app developed from the Kivy framework and compiled with buildozer. Outside of built-in
  assets, the database and functionality was built compeltely from scratch which made this project the hardest to complete.
  It is fully functional and can create accounts to store passwords inside of a catelog that can be deleted at any time.
  Play the video for a demonstrations. 
  </p>
</div>

</div> 

const Contact = () =>
  <div className="contactBox" id="section5">
    <hr></hr>
    <h2>Contact</h2>
    <h3>richardher32@gmail.com</h3>
    <h3>913-749-8200</h3>
  </div>

function UseWindowSize() {
  const [size, setSize] = React.useState([0, 0]);

  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

export default App;
