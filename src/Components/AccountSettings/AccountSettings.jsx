import React, { useState } from 'react';
import "./AccountSettings.css"; 
import { ButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap';
import settingImage from '../../assets/settingImage.png';
import pencil from '../../assets/pencil.png';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import secondcardlisting from '../../assets/secondcardlisting.png';

const MyListing = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Personal', value: '1' },
    { name: 'Buisness', value: '2' },
    { name: 'agent', value: '3' },
  ];

  return (
    <div className="">
      <div className="">
        <div className='mx-2'>
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                style={{
                  borderColor: radioValue === radio.value ? '#FFFFFF' : '#CCCCCC',
                  color: radioValue === radio.value ? 'black' : 'black',
                  backgroundColor: radioValue === radio.value ? '#FFFFFF' : 'transparent'
                }}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <Container className="mt-3">
            <h4 className='my-listing'> Personal Info</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
          <Row>
            <Col md={12}>
              {radioValue === '1' && 
               <div>
            {/* <Form className='mt-3'>
      <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
        <Form.Control type="name" placeholder="Your first and last given name" className="custom-inputs" />
        <Form.Label className="custom-placeholder-labels">Name</Form.Label>
        <div>N/A</div> 
        <div>Edit</div>
      </Form.Group>
    </Form> */}
{/* <Form className='mt-3'>
  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Your first and last given name"
      className="custom-inputs"
    />
    <Form.Label className="custom-placeholder-labels">Name</Form.Label>
    <div className="position-absolute end-0 d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
      <div className="me-2">N/A</div>
      <div>Edit</div>
    </div>
  </Form.Group>
</Form> */}

<Form className='mt-3'>
  <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput1">
    <div className="position-relative">
      <Form.Control
        type="name"
        placeholder="Your first and last given name"
        className="custom-inputs pe-5"
      />
      <div className="position-absolute top-50 end-0 translate-middle-y d-flex me-2">
        <div className="me-2">N/A</div>
        <div>Edit</div>
      </div>
    </div>
    <Form.Label className="custom-placeholder-labels">Name</Form.Label>
  </Form.Group>
</Form>




               </div>
              }
              {radioValue === '2' && <p>Hello</p>}
              {radioValue === '3' && <p>Welcome</p>}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyListing;
