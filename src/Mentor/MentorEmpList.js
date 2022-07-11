import React, { useState } from 'react'

import { Button} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Input, Layout, Table, Popover, Space, Dropdown, Menu ,Select} from "antd";
import { Content } from "antd/lib/layout/layout";
import { DownOutlined } from "@ant-design/icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./MentorEmpList.css"
import GiveRatingModel from './GiveRatingModel';


function MentorEmpList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModel, setshowModel] = useState(false);

  const handleCloseModel = () => setshowModel(false);
  const handleShowModel = () => setshowModel(true);

  const [lgshow, setlgShow] = useState(false);
  const handleLgClose = () => setlgShow(false);

  const menu = (
    <Menu
      items={[
        {
          label: <p className="dropdownName">Absconded</p>,
          key: "0",
        },
        {
          label: (
            <>
              <p onClick={handleShowModel} className="dropdownName">
                <a>Terminated</a>
              </p>
            </>
          ),
          key: "1",
        },
        {
          label: <p className="dropdownName">Active</p>,
          key: "2",
        },
      ]}
    />
  );
  const menu1 = (
    <Menu
      items={[
        {
          label: <p className="dropdownName">Employees data</p>,
          key: "0",
        },
        {
          label: (
            <>
              <p  className="dropdownName">
               Attendance data
              </p>
            </>
          ),
          key: "1",
        },
        {
          label: <p className="dropdownName">Mock data</p>,
          key: "2",
        },
      ]}
    />
  );
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
      {
        id: 1,
        no: `01`,
        Employee_id: "#154234653",
        employee_name: "AGCHSD",
        mock_taken: "2/5",
        attendance: "13/23",
      },
    ]);
     // popover content
     const content = (
      <div>
        <table>
          <tr>
            <th>
              <p>Mock 1</p>
            </th>
            <th className="ps-5">
              <p style={{ color: "#02B91B" }}>Excellent</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>Mock 2</p>
            </th>
            <th className="ps-5">
              <p style={{ color: "#1492E67D" }}>Good</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>Mock 3</p>
            </th>
            <th className="ps-5">
              <p style={{ color: "#D89119" }}>Above average</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>Mock 4</p>
            </th>
            <th className="ps-5">
              <p style={{ color: "#C9A805" }}>Average</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>Mock 5</p>
            </th>
            <th className="ps-5">
              <p style={{ color: "#EC3E66" }}>Above average</p>
            </th>
          </tr>
        </table>
      </div>
    );

    const columns = [
      {
        key: "1",
        title: "No.",
        dataIndex: "no",
      },
      {
        key: "2",
        title: "Employee ID",
        dataIndex: "Employee_id",
      },
      {
        key: "3",
        title: "Employee Name",
        dataIndex: "employee_name",
      },
      {
        key: "4",
        title: "Mocks Taken",
        dataIndex: "mock_taken",
      },
      {
        key: "5",
        title: "Skills",
        dataIndex: "skills",
      },
      {
        key: "6",
        title: "Mock Rating",
        render:()=>{
          return(
              <>
      <Popover content={content} placement="bottom" className="bg-white border-0">
               <i
                 style={{ crouser:"pointer", fontSize: "20px", color: "#C9A805" }}
                 className="fa-solid fa-triangle-exclamation"
               ></i>
           </Popover>
              
              </>
          )
        }
      },
      {
        key: "7",
        title: "Attendance",
        dataIndex: "attendance",
      },
      {
        key: "8",
        title: "Status",
        render: (record) => {
          return (
            
             <div style={{display:"flex"}}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <p style={{ color: "black" }}>
                  <Space>
                    Active
                    <DownOutlined style={{ color: "#A4AFB7" }} />
                  </Space>
                </p>
              </a>
            </Dropdown>
            <Modal show={showModel} onHide={handleCloseModel}>
              <Modal.Header closeButton>
                <Modal.Title>Reason to change Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Reason
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModel}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
            </div>
          );
        },
        
      },
      {
        key: "8",
        title: "",
        render:()=>{
            return(
            <>
              <Button
              variant="primary"
              className="giveRating"
              onClick={()=>setlgShow(true)}
            >
             Give Rating
            </Button>
            {/* onClick={()=>{nextData()}} */}
            <img
              style={{ cursor: "pointer", marginLeft: "10px" }}
             
              src="./Mentor/Xnix-Line-Right Arrow.svg"
              alt="arrow"
            />
            </>
            )
        }



       
      },
    ];
  
    const onAddStudent = () => {
      const randomNumber = parseInt(Math.random() * 1000);
      const newStudent = {
        no:``,
        id: randomNumber,
        batch_id: "Name " + randomNumber,
        batch_name: randomNumber + "@gmail.com",
        address: "Address " + randomNumber,
      };
      setDataSource((pre) => {
        return [...pre, newStudent];
      });
    };
    const onDeleteStudent = (record) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this record?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          setDataSource((pre) => {
            return pre.filter((student) => student.id !== record.id);
          });
        },
      });
    };
    const onEditStudent = (record) => {
      setIsEditing(true);
      setEditingStudent({ ...record });
    };
    const resetEditing = () => {
      setIsEditing(false);
      setEditingStudent(null);
    };
      // ADDING
      const [modal1Visible, setModal1Visible] = useState(false);
      // dropDown
      const techno=["HTML","CSS","Java Script","React JS","JAVA+Spring Boot","Node & Express JS"]
    
  return (
    <div>
    <div className="container-fluid" id="head">
    <p id="headtext">Employee list</p>
    <p id="headtext1">(Batch ID)</p>
    <input
      type="text"
      className="form-control"
      id="headinp"
      placeholder="search"
      prefix={<img src="./Mentor/Searchicon.svg"/>}
    ></input>
   <Dropdown overlay={menu1}>
  <Button id="btndwn">
    <Space>
      Download
      <DownOutlined />
    </Space>
  </Button>
</Dropdown>
   
    <>
      <Button variant="primary" id="buttonheader" onClick={handleShow}>
        Create Mock
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Mock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Batch ID</Form.Label>
              {/* <Form.Control type="text" className="mb-3" autoFocus /> */}
              <Select style={{width:"100%"}}  placeholder=""></Select>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Mock No</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            {/* <Form.Group label="Technologies">
            <Select>
              <Select.Option value="demo">Select here</Select.Option>
              <Select.Option value="demo">React</Select.Option>
            </Select>
          </Form.Group> */}

            <Form.Label>Technologies</Form.Label>
            <Select style={{width:"100%"}} placeholder=""></Select>
            <Form.Label>Panel</Form.Label>
            <Select style={{width:"100%"}} placeholder=""></Select>
            <Form.Label>Date & Time </Form.Label>
            <input style={{width:"100%",color:"rgb(56, 55, 55)"}} type="datetime-local"></input>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  </div>
    <Layout style={{
        marginLeft:"75px"
       }}>
              <Layout
                style={{
                  padding: "0 24px 24px"
                }}
              >
                
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    marginTop:"-283.5px"
                  }}
                >
                   
          <Table columns={columns} dataSource={dataSource} rowSelection={true}></Table>
            <Modal
              title="Edit Student"
              visible={isEditing}
              okText="Save"
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                setDataSource((pre) => {
                  return pre.map((student) => {
                    if (student.id === editingStudent.id) {
                      return editingStudent;
                    } else {
                      return student;
                    }
                  });
                });
                resetEditing();
              }}
            >
              <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
              <Input
                value={editingStudent?.name}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, name: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>Employee ID</p>
              <Input
                value={editingStudent?.email}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, email: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>E-mail ID</p>
              <Input
                value={editingStudent?.address}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, address: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>technoligies</p>
              <Input
                value={editingStudent?.address}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, address: e.target.value };
                  });
                }}
              />
            </Modal>
                </Content>
              </Layout>
              <GiveRatingModel
        lgShow={lgshow}
        handleLgClose={handleLgClose} />
            </Layout>
    
             {/* adding */}
            
          <Modal
          
          title="Add new batch"
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
        >
          <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>Employee ID</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>E-mail ID</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>technoligies</p>
          <Select mode='multiple' style={{width:"100%",}} placeholder="">{techno.map((techno,idx)=>{
            return <Select.Option key={idx} value={techno}><button className='Mdrop'>{techno}</button></Select.Option>
          })}</Select>
        </Modal>
        </div>
    
  )
}

export default MentorEmpList