import React from 'react'
import { Input, Col, Row, Form, Collapse, DatePicker, Select } from 'antd';
import "./Employee.css"
function Secondaryinfo() {
  return (
    <div style={{width:"70%",marginLeft:150}}>
 <Form layout='vertical'>
                <Row>
                  <Col span={8} push={2} ><Form.Item id='txt' label="PAN No."><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Aadhar No."><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Father Name"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Mother Name"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Spouse Name"><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Passport No."><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Marital Status">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                 
                </Row>
        </Form>      



    </div>
  )
}

export default Secondaryinfo