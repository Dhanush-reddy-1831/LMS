import { Breadcrumb, Button, Input, Layout, Menu,Modal,Table} from "antd";
import "./Mainnav.css";
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;



function Mainnav() {
  
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
                
                 
                
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Mentor/ Employee"
                  aria-label="Text input with checkbox"
                />
              </div>
            </div>
            <div className="btn btn-rounded">
              <button id="logout" type="button" className="btn btn-outline">Logout</button>

            </div>
          </div>

          <Menu mode="horizontal" />
        </Header>
        <Layout>
          <Sider width={75} className="site-layout-background bg-white ">
            <Menu mode="inline" />
            <div>
              <Link to={"./batchlist2"}><button className="batchbtn"><p className="batchp">Batch</p></button></Link>
           <Link to={"./mentor"}><button className="mentorbtn"><p className="mentorp">Mentor</p></button></Link>
           <Link to={"./request"}><button className="reqbtn"><p className="reqp">Requset</p></button></Link>           
        
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

export default Mainnav;