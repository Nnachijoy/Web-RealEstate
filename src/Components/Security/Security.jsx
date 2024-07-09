import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Security = () => {
  return (
    <div>
         <h3 className='my-listing mx-3 mt-5'>Sign in & Security</h3>

         <Form className='mt-4'>
      <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email"
          placeholder="verify your email address linked to your account"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
        />
        <div className="position-absolute d-flex align-items-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
          <div>
            <div className="me-5 na">igorfriday@gmail.org</div>
            <div className="me-5 text-danger">unverified</div>
          </div>
          <h1 className="edit">verify</h1>
        </div>
        <Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput2">
        <Form.Control
          type="password"
          placeholder="set a unique password to protect your account"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>create password</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">Password</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput3">
        <Form.Control
          type="text"
          placeholder="make your account extra secure"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>enable</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">2-step verification</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput4">
        <Form.Control
          type="number"
          placeholder="Link your google account to REALHOMES"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>unlink</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">Google sign in</Form.Label>
      </Form.Group>

      <h3 className='my-listing mx-3 mt-5'>Manage account</h3>

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput5">
        <Form.Control
          type="text"
          placeholder="this will shut down your account, but retain your information"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>Deactivate account</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">Deactivate account</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput6">
        <Form.Control
          type="number"
          placeholder="this will shut down your account, but retain your information"
          className="custom-inputs"
          style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
        />
        <div className="position-absolute d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na"></div>
          <h1 className='edit mt-2'>Go to privacy portal</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">Privacy & Cookies</Form.Label>
      </Form.Group>
    </Form>


    </div>
  )
}

export default Security