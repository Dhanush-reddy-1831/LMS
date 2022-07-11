import { Avatar, Breadcrumb, Button, Dropdown, Input, Layout, Menu,Modal,Space,Table} from "antd";
import "./EmpNavbar.css";
import { Link } from 'react-router-dom';
import { DownOutlined } from "@ant-design/icons";
import ResetPassword from "../Mentor/Reset";
import { useState } from "react";
const { Header, Content, Sider } = Layout;



function EmpNavbar() {
    // resetPassword
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    // dropdown
    const menu = (
        <Menu
          items={[
            {
              label: <p className="dropdownName">Profile</p>,
              key: '0',
            },
            {
              label: <p className="dropdownName">Change Password</p>,
              key: '1',
            },
            {
              label: <p className="dropdownName">Logout</p>,
              key: '2',
            },
          ]}
        />
      );
  
  return (
    <div>
   <Layout>
        <Header className="header bg-white">
          <div className="Emplogo">
            <div>
              <img id="EmplogoBL" src="./Assets/logo1@2x.png" alt="no" />
            </div>
            <div id="Emp_search">
              <div className="input-group mb-3">
                
              <Input className='EmpNavsearch' size='small' placeholder="Search Employee" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />
              </div>
            </div>
            <div className="btn btn-rounded">
            <Avatar size={50} icon={<img src="./Mentor/Avatar@2x.png" alt="avatar" />} />
            <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <p className="drpdwn">Madara</p>
        <DownOutlined style={{color:"#A4AFB7"}} />
      </Space>
    </a>
  </Dropdown>


            </div>
          </div>

          <Menu mode="horizontal" />
        </Header>
        <Layout>
          <Sider width={75} className="site-layout-background bg-white ">
            <Menu mode="inline" />
            <div>
            <button className="Empdashhbtn"><p className="Empdashp">Dashboard</p></button>
            </div>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
               
            </Content>
          </Layout>
        </Layout>
        <ResetPassword setShow={setShow} handleClose={handleClose} />
      </Layout>

    </div>
  )
}

export default EmpNavbar;