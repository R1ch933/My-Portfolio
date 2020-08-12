import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './images/Background.jpg'
import {Facebook, GitHub, Linkedin, CornerUpRight, CornerRightUp, ArrowRight, ArrowLeft, X} from 'react-feather'
import profile from './images/Profile.jpg'
import aboutMePhoto from './images/AboutMe_Photo.jpg'
import pdf from './images/Resume.pdf'
import project1 from './images/Project_1-1.PNG'
import project2 from './images/Project_3-1.PNG'
import project3 from './images/Project_2-1.PNG'
import ReactPlayer from 'react-player';


function App() {


  const [pos, setPos] = React.useState({pos: '-150vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '-150vw'});

  const setPositionProj1 = () => 
    setPos({pos: '0vw', posproj1: '5vw', posproj2: '-150vw', posproj3: '-150vw'});
  const setPositionProj2 = () => 
    setPos({pos: '0vw', posproj1: '-150vw', posproj2: '5vw', posproj3: '-150vw'});
  const setPositionProj3 = () => 
    setPos({pos: '0vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '5vw'});

  const retractPosition = () => setPos({pos: '-150vw', posproj1: '-150vw', posproj2: '-150vw', posproj3: '-150vw'});

  let section2 = () => document.getElementById("section2")
  return (
    <div className="App">
      <NavBar s2={{section2}}/>
      <Header />
      <div className="infoBackground">
      <About />
      <Projects setPosition={setPositionProj1} setPosition2={setPositionProj2} setPosition3={setPositionProj3}/>
      </div>
      <div className="projectBox" style={{left: pos.pos}}>
        <div className="xButton" onClick={retractPosition}>
          <X height="10vh" width="10vh" color="white"/>
        </div>
      
      </div>
      <ProjectOne pos={pos}/>
      <ProjectTwo pos={pos}/>
      <ProjectThree pos={pos}/>
      
    </div>
  );
}

const NavBar = ({s2}) => 
  <div className="navigationBar">
    <div className="Home">
      <a href="">Home</a>
    </div>
    <div className="About">
      <a href="#About">About</a>
    </div>
    <div className="About">
      <a href="#Resume">Resume</a>
    </div>
    <div className="Projects">
      <a href="#Projects">Projects</a>
    </div>
  </div>

const Header = () => 
  <div className="headerBox" id="section1">
    <div className="titleText"> 
      <p style={{margin:"0"}}>I'm Richard Her</p>
    </div>
    <p style={{marginTop:"0vh", fontSize:"3vh"}}>Phone: 913-749-8200</p>
    <p style={{marginTop:"0vh", fontSize:"3vh"}}>Email: richardher32@gmail.com</p>
    <div className="briefAbout" style={{margin:"0vh"}}>
      <p>Django | HTML/CSS | Javascript | Kivy | Python | React</p>
    </div>
    <div className="socialMediaBox">
      <div id="firstIcon" className="icon">
        <Facebook style={{height: "5vmin", width: "5vmin"}} />  
      </div>
      <div className="icon">
        <GitHub style={{height: "5vmin", width: "5vmin"}}/>
      </div>
      <div className="icon" style={{marginRight:"0vw"}}>
        <Linkedin style={{height: "5vmin", width: "5vmin"}}/>
      </div>
    </div>
  </div>

const About = () => {

  const size = UseWindowSize()

  const [dim, setDim] = React.useState({t:"39vh",l:"39vw"})
  


  return(
  <div className="aboutMe" id="About">
    <div className="aboutMeTitle">
      <p>About Me</p>
    </div>
    <div className="underLine">

    </div>
    <div style={{height:"100vh"}}>
      <div className="picCaption2Title2">
          <h3 style={{color:"white",marginTop:"1.5vh", fontSize:"3vh"}}>Summary</h3>
      </div> 
      <div className="profilePic">
        <img src={profile} style={{width:"25vw",height:"auto", margin:"10px"}}/>
      </div>
      <div className="picCaption" style={{left:dim.l,top:dim.t}}>
        <p>My name is Richard Her. I'm from Kansas City, Kansas and I decided to pursue my bachelor's in computer science because computer
          programming always interested me. From web applications to video games, I was curious on how those
          contents were made. I find its creative aspects fascinating.
        </p>
      </div>
    </div>
    <div style={{height:"125vh"}}>
      <div className="profilePic2">
        <img src={aboutMePhoto} style={{width: "25vw", height: "auto", margin:"10px"}}/>
      </div>
      <div className="picCaption2Title">
        <h3 style={{color:"white",paddingTop:"1.5vh", fontSize:"3vh"}} id="Resume">Education</h3>
      </div>  
      <div className="picCaption2">
        <p>
          I graduated from Sumner Academy of Arts and Science in Highschool.
          I am now an undergraduate sophomore attending Kansas City, Kansas Community College
          in pursuit of a technical associates. I plan to continue my education at Park University
          to obtain a bachelor's in Computer Science.
        </p>
        <p>
          Click <a href={pdf} target="_blank" style={{textDecoration:"none", color: "orange"}}>here</a> to download my resume
        </p>
      </div>
    </div>
  </div>)}

const Projects = ({setPosition,setPosition2,setPosition3}) => 
  <div className="projects" id="Projects">
    <hr/>
    <div>
        <h1>Projects</h1>
    </div>
    <div className="project1" onClick={setPosition}>
      <img style={{width: "100%",height:"auto"}} src={project1}/>
    </div>
    <div className="project2" onClick={setPosition2}>
      <img style={{width: "100%",height:"auto"}} src={project2}/>
    </div>
    <div className="project3" onClick={setPosition3}>
      <img style={{width: "15vw",height:"auto"}} src={project3}/>
    </div>
  </div>

const ProjectOne = ({pos}) =>
  <div className="showProj1" style={{left: pos.posproj1}} >
  <div style={{position:"relative", height:"5vh", color:"white"}}>
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

const ProjectTwo = ({pos}) =>
  <div className="showProj1" style={{left: pos.posproj2}} >
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

const ProjectThree = ({pos}) =>
<div className="showProj1" style={{left: pos.posproj3}} >
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
