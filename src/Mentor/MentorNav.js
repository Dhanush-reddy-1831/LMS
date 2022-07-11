import { Avatar, Breadcrumb, Button, Dropdown, Input, Layout, Menu,Modal,Space,Table} from "antd";
import "./MentorNav.css";
import { Link } from 'react-router-dom';
import { DownOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;



function MentorNav() {

    // dropdown
    const menu = (
        <Menu
          items={[
            {
              label: <p className="MdropdownName">Profile</p>,
              key: '0',
            },
            {
              label: <p className="MdropdownName">Change Password</p>,
              key: '1',
            },
            {
              label: <p className="MdropdownName">Logout</p>,
              key: '2',
            },
          ]}
        />
      );
  
  return (
    <div>
   <Layout>
        <Header className="header bg-white">
          <div className="logo">
            <div>
              <img id="logoBL" src="./Assets/logo1@2x.png" alt="no" />
            </div>
            <div id="g_search">
              <div className="input-group mb-3">
                
              <Input className='MNavsearch' size='small' placeholder="Search Employee" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />
              </div>
            </div>
            <div className="btn btn-rounded">
            <Avatar size={50} icon={<img src="./Mentor/Avatar@2x.png" alt="avatar" />} />
            <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <p className="drpdwn">Shalini</p>
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
              <Link to={""}><button className="dashbtn"><p className="dashp">Dashboard</p></button></Link>
           <Link to={"./mentorbatchlist"}><button className="batchbtn"><p className="mbatchp">Batch</p></button></Link>          
        
            </div>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> 
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
      </Layout>

    </div>
  )
}

export default MentorNav;