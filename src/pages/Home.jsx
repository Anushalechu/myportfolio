import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import resume from '../Assets/Anusha_Resume (2).pdf'

function Home() {
  return (
    <>
      <div className=" container justify-content-between align-item-center " id='Home' >
        <div style={{ textAlign: "center" }} >
          <p style={{ fontSize: "60px" }}>Hello! My Name Is</p>
          <p style={{ fontSize: "70px" }}><span style={{ color: 'blue' }}> Anusha</span></p>
          <p style={{ fontSize: "25px" }}>A full Stack Developer</p>
          <p>I am a full stack developer specializing in building exceptional digital experiences. </p>
          <p>Currently ,I'm Focused On building responsive full-stack web Apllication</p>
          <button className="button" type="button" class="btn btn-success">
            <a
              style={{textDecoration:"none", color:"white"}}
              href={resume}
              download='resume'
            >
              Download Resume
            </a>
          </button>
        </div>
        <About />
        <Skills />
        <Projects/>
      </div>
    </>
  )
}

export default Home