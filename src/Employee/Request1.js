import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Request1.css"
function Request1() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
 <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body><h4>Your request will be approved <br/> in sometime, Please wait</h4></Modal.Body>
       <br />  <br />  <br />  
          <Button variant="primary" onClick={handleClose}>
            Return
          </Button>
      
      </Modal>
    </>


    </div>
  )
}

export default Request1