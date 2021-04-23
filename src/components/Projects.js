import React from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import '../css/projects.css'

const Projects = () => {
  return (
    <Container className='containerProjects' id="projects">
      <h1>Projects</h1>
      <hr />
      <div className="cards">
          <Row>
            <Col lg={4} sm={12} className='mb-5'>
              <Card style={{ width: '18rem', height: '350px', background: '#1b242f', color: 'white' }}>
                <Card.Img
                  variant='top'
                  src={require('../img/carrental.png').default}
                  alt='project'
                />
                <Card.Body>
                  <Card.Title>Rental Car Website</Card.Title>
                  <Button
                    variant='primary'
                    href='https://santiagocaicedoa.github.io/carRental/'
                    alt='project'
                    target='_blank'
                  >
                    GO LIVE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={12} className='mb-5'>
              <Card style={{ width: '18rem', height: '350px', background: '#1b242f', color: 'white' }}>
                <Card.Img
                  variant='top'
                  src={require('../img/musicPlayer.png').default}
                />
                <Card.Body>
                  <Card.Title>Music Player App</Card.Title>
                  <Button
                    variant='primary'
                    href='https://santiagocaicedoa.github.io/musicPlayer/'
                    alt='project'
                    target='_blank'
                  >
                    GO LIVE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={12}>
              <Card style={{ width: '18rem', height: '350px' , background: '#1b242f', color: 'white'}}>
                <Card.Img variant='top' src={require('../img/pizza.png').default} />
                <Card.Body>
                  <Card.Title>Pizza Restaurant Website</Card.Title>
                  <Button
                    variant='primary'
                    href='https://santiagocaicedoa.github.io/PizzaApp/'
                    alt='project'
                    target='_blank'
                  >
                    GO LIVE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </div>
      <p>
        Go to my{' '}
        <a
          href='https://github.com/SantiagoCaicedoA?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>{' '}
        to see all my projects
      </p>
    </Container>
  )
}

export default Projects
