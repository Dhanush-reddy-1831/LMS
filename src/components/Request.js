import React, { useState } from 'react'
import "./Request.css"
import { Button, Input, Layout,Modal,Table } from "antd";
import Reject from './Reject';
import Approve from './Approve';
const {Content } = Layout;

function Request() {
  const [lgShow, setlgShow] = useState(false);
  const handleClose = () => setlgShow(false);

  const [show,setshow] = useState(false)
  const handleShowClose = () => setshow(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
      {
          id: 1,
          no: "01",
          employeeid: "#154234653",
          employeename: "Aditi",
          yop:"2022",
          percentage:"85%",
          experience:"Fresher",
          contactno:"1234567890",
        },
   
  ]);
  const columns = [
    {
      key: "1",
      title: "No.",
      dataIndex: "no",
    },
    {
      key: "2",
      title: "Employee ID",
      dataIndex: "employeeid",
    },
    {
      key: "3",
      title: "Employee Name",
      dataIndex: "employeename",
    },
    {
      key: "4",
      title: "YOP",
      dataIndex: "yop",
    },
    {
      key: "5",
      title: "Percentage",
      dataIndex: "percentage",
    },
    {
      key: "6",
      title: "Experience",
      dataIndex: "experience",
    },
    {
      key: "7",
      title: "Contact No.",
      dataIndex: "contactno",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (

          <>
            
              <Button  onClick={()=>setshow(true)}
               className="approve">Approve</Button>&nbsp;&nbsp;
              <Button onClick={()=>setlgShow(true)}
              className="reject" color="red">Reject</Button>
              
          </>

        );
      },
    },
  ];

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
  return (
    <div> <Layout style={{
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
                  marginTop:"-320px"
                }}
              >
                  <div className='reql'>
                      <p className='rpar'>RequestList</p>
                      <Input className='rsearc' size='medium' placeholder="Search" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />                  </div>
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
            <Input
              value={editingStudent?.name}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <Input
              value={editingStudent?.email}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
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
            <Approve 
             show={show}
             handleShowClose={handleShowClose}/>
            <Reject 
              lgShow={lgShow}
              handleClose={handleClose}/>
          </Layout>
          </div>
  )
}

export default Request