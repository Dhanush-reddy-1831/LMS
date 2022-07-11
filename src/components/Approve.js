import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Form from 'react-bootstrap/Form';
import { Col, Row, Form as Form, Select } from 'antd';

function Approve(props) {
    const handleHide=()=>{
        props.handleShowClose()
       }
  return (
    <div><Modal
    size="lg"
    show={props.show}
    onHide={props.handleShowClose}
    aria-labelledby="example-modal-sizes-title-lg"
    >
    <Modal.Header closeButton>
      <Modal.Title className="modeltitle" id="example-modal-sizes-title-lg">
       <h4 style={{color:"#086288"}}>Change status</h4>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form layout='vertical'>
    <Row>
                  <Col span={8} push={2} ><Form.Item label="Batch Name">  <Select style={{width:"600px"}}  placeholder=""></Select></Form.Item></Col >
                 
                </Row>
                <Row>
                <Col span={8}  push={2} ><Form.Item label="Batch ID">  <Select style={{width:"600px"}}  placeholder=""></Select></Form.Item></Col >
                </Row>
                </Form>
    </Modal.Body>
    <Modal.Footer>
     
      <Button variant="primary" onClick={handleHide}>
        Submit
      </Button>
    </Modal.Footer>
    </Modal></div>
  )
}

export default Approve



