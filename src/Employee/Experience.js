import React from 'react'
import { Input,Col,Row,Form,Collapse,Select } from 'antd';
import 'antd/dist/antd.css';
import "./Employee.css"
const { Panel } = Collapse;
function Experience() {
  return (
    <div>
    <Collapse defaultActiveKey={['1']} >
    <Panel header="Experience" key="1" >
  <Form layout='vertical'>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Company Name"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Year Of Experience"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Date Of Join"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Date of Relieving"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Designation"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Location"><Input /></Form.Item></Col >
          </Row>
  </Form>
  </Panel>
  </Collapse>      
</div>
  )
}

export default Experience