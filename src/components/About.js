import React from 'react'
import '../css/about.css'
import { Container, Col, Row, ProgressBar } from 'react-bootstrap'

const About = () => {


  return (
    <div className="bigContainer" id="about">
      <Container className='container'>
        <h1>ABOUT</h1>
        <hr />
        <Row className='Info'>
          <Col md={6}>
            <i className='fas fa-code'></i>
            <p>
            I'm Software developer student passionate about coding. I started learning it when I was in high school and I haven't looked back since. From the moment I produced "Hello World" on the console, I knew I was hooked the world of software development.
            </p>
          </Col>    
          <Col md={6}>
            <i className='fas fa-user-graduate'></i>
            <p>
             I'm currently attending to the Southern Alberta Institute of Technology located in Calgary, Canada. I'm taking the Information Technology course with major in Software development. I will be graduating in spring 2022 with deep understanding in Object-oriented programming, Web Application programming and Database programming
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} >
              <img src={require('../img/IMG_5239 2.jpg').default} alt="" height="400px" width="auto"/>
          </Col>
          <Col md={6}>
        <h3>Coding skills</h3>
            <ProgressBar className='progress' now={95} label={'HTML/CSS'} />
            <ProgressBar className='progress' now={87} label={'Javascript'} />
            <ProgressBar className='progress' now={75} label={'React'} />
            <ProgressBar className='progress' now={87} label={'Java'} />
            <ProgressBar className='progress' now={70} label={'Node js'} />
            <ProgressBar className='progress' now={85} label={'SQL'} />
            <ProgressBar className='progress' now={75} label={'MonogDB'} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
