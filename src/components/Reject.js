import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Reject(props) {
    const handleHide=()=>{
        props.handleClose()
       }
  return (
    <div>
         <Modal
        size="lg"
        show={props.lgShow}
        onHide={props.handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modeltitle" id="example-modal-sizes-title-lg">
           <h4 style={{color:"#086288"}}>Reason for Rejection</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Reason</p>
        <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>


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

export default Reject