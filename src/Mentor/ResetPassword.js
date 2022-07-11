import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Restpassword.css"

function ResetPassword(props) {
    const [show, setShow] = useState(true);

  const handleClose = () =>setShow(false);


  return (
    <div> 
        

      <Modal show={show} onHide={handleClose}>
        
          <Modal.Title className='titlename'>Reset your password &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to continue</Modal.Title>
          <br/>
       <div className='pass'>
       <Space direction="vertical">
    <Input.Password style={{width:"350px",height:"40px",borderRadius:"5px"}} placeholder="Enter existing password" />
    <Input.Password
    style={{height:"40px",borderRadius:"5px"}}
      placeholder="Enter New Password (Must be at least 6 characters)"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    <Input.Password
    style={{height:"40px",borderRadius:"5px"}}
      placeholder="Re-enter Password"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>
       </div>
       <br/>
        
        <div className='changebtn'> <Button style={{alignItems:"center"}} variant="primary" onClick={handleClose}>
            Change 
          </Button></div>
          <br/>
         
      </Modal>
        
      </div>
  )
}

export default ResetPassword