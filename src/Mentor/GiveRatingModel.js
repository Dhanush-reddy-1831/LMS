import { Table } from 'antd';
import React, { useState } from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { Select } from 'antd';

function GiveRatingModel(props) {
    
   const handleHide=()=>{
    props.handleLgClose()
   }

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <div>
        
         <Modal
        size="lg"
        show={props.lgShow}
        onHide={props.handleLgClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modeltitle" id="example-modal-sizes-title-lg">
           Mock Rating
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex ms-5 me-5" >
              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Label>Mock Type</Form.Label>
                <Form.Control
                  type="text"
                  name="mockType"
                  // value={MockRating.batchName}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                />
              </Form.Group>

              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>Mock Taken</Form.Label>
                <datalist id="mylist">
                  <option value="1">{}</option>
                  <option value="2">{}</option>
                  <option value="3">{}</option>
                </datalist>
                <Form.Control
                  type="search"
                  list="mylist"
                  name="mockTaken"
                  // value={MockRating.mentorName}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                />
              </Form.Group>
            </div>
            <div className="d-flex ms-5 me-5">
              <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                <Form.Label>Technology</Form.Label>
                <datalist id="technologies">
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                  <option value="Java+SpringBoot"></option>
                  <option value="Node & Expressjs"></option>
                </datalist>
                <Form.Control
                  className="input-group"
                  multiple
                  list="technologies"
                  type="text"
                  name="technology"
                  // value={MockRating.technology}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                />
              </Form.Group>
              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>Practical Knowledge (out of 100) <span className="text-danger">*</span> </Form.Label>
                <Form.Control
                  type="text"
                  name="practicalKnowledge"
                  // value={MockRating.startDate}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex ms-5 me-5">
              <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                <Form.Label>Theorotical Knowledge (out of 100)<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="theoroticalKnowledge"
                  // value={MockRating.endDate}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                />
              </Form.Group>
              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>
                  Overall Feedback ((Practical+Theorotical)/2)<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="overallFeedback"
                  // value={MockRating.endDate}
                  // onChange={(e) => {
                  //   changeDetails(e);
                  // }}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicPassword">
              <Form.Label>Detailed Feedback <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="feedback"
                // value={MockRating.endDate}
                // onChange={(e) => {
                //   changeDetails(e);
                // }}
                style={{height:"100px"}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleHide}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default GiveRatingModel

