import React from 'react'
import { Form } from 'react-bootstrap'
import '../css/contact.css'
import emailjs from 'emailjs-com'

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_r50bx2s',
        e.target,
        'user_PfPe4nILf2P9v0ZSmyQea'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    document.getElementById('hidden').style.display = 'block'
    e.target.reset()
  }

  return (
    <div className='containerContact' id="contact">
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100 102'
        height='75'
        width='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        className='svgcolor-light'
      >
        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
      </svg>
      <h1>Contact</h1>
      <hr id='contactLine' />
      <Form className='formContainer' onSubmit={sendEmail}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            name='name'
            required
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            name='email'
            required
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows={3} name='message' />
        </Form.Group>
        <input type='submit' id="button" value='SEND' />
      </Form>
      <span id='hidden'>Your message has been sent!</span>
    </div>
  )
}
