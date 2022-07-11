import React from 'react'
import { Input, Col, Row, Form, Select } from 'antd';
import "./Employee.css"
function BankDetalis() {
  return (
    <div style={{width:"70%",marginLeft:150}}>
 <Form layout='vertical'>
                <Row>
                  <Col span={8} push={2} ><Form.Item id='txt' label="Account No."><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Bank Name"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Account Type"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="IFSC Code"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Branch">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                  <Col span={8} offset={6} ><Form.Item label="State">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                </Row>
        </Form>      



    </div>
  )
}

export default BankDetalis
