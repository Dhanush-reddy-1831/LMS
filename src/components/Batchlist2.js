import React, { useState } from 'react'
import "./Batchlist.css"; 
import { Button, DatePicker, Input, Layout,Modal,Select,Table} from "antd";
const { Content } = Layout;



function Batchlist2() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
          no:"01",
          batch_id:"#154234653",
            batch_name: "abcd",
            mentor_name:"Chandan",
            technoligies:"React Angular",
            startdate:"14 MAR 2022",
            enddate:"14 Apr 2022",
            status:"in progress"
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
        title: "Batch ID",
        dataIndex: "batch_id",
      },
      {
        key: "3",
        title: "Batch Name",
        dataIndex: "batch_name",
      },
      {
        key: "4",
        title: "Mentor Name",
        dataIndex: "mentor_name",
      },
      {
        key: "5",
        title: "Technologies",
        dataIndex: "technoligies",
      },
      {
        key: "6",
        title: "Start Date",
        dataIndex: "startdate",
      },
      {
        key: "7",
        title: "End Date",
        dataIndex: "enddate",
      },
      {
        key: "8",
        title: "Status",
        dataIndex: "status",
      },

      {
        key: "9",
        title: "Actions",
        render: (record) => {
          return (
            <>
             <i onClick={() => {
                  onEditStudent(record);
                }} className="fa-solid fa-pencil"/>
              <i onClick={() => {
                  onDeleteStudent(record);
                }}
                style={{marginLeft: 15 }} className="fa-solid fa-trash"></i>
            </>
          );
        },
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
        title: "Are you sure, you want to delete this batch record?",
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
    const mentors=["Satyam","xyz","abc"]
    const techno=["HTML","CSS","Java Script","React JS","JAVA+Spring Boot","Node & Express JS"]
    // DATE
    const [startDate, setstartDate] = useState(null)
    const [endDate, setendDate] = useState(null)
  return (
    <div>
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
                marginTop:"-320px"
              }}
            >
                <div className='batchl'>
                    <p className='par'>Batchlist</p>
                    <Input className='searc' size='small' placeholder="Search" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />
                    {/* <Button >+New Batch</Button> */}
                    {/* <button className='batchnew' onClick={onAddStudent}>+New Batch</button> */}
                    <Button className='batchnew'  onClick={() => setModal1Visible(true)}>
   +NewBatch
      </Button>
                </div>
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
         <p style={{color:"#707070",margin:"5px"}}>Batch Name</p>
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
           <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
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
            <br/>
       <br/>
       <p style={{color:"#707070",margin:"5px"}}>Start Date</p>
          <DatePicker style={{width:"100%"}}
          selected={startDate}
          onChange={date=> setstartDate(date)}
          dateFormat=''
          showYearDropdown/>
      
       <br/>
       <br/>
       <p style={{color:"#707070",margin:"5px"}}>End Date</p>
          <DatePicker style={{width:"100%"}}
          selected={endDate}
          onChange={date=> setendDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          showYearDropdown/>
        </Modal>
            </Content>
          </Layout>
        </Layout>

        {/* adding */}
        
      <Modal
      
        title="Add new batch"
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <p style={{color:"#707070",margin:"5px"}}>Batch Name</p>

       <Input size="large" placeholder=""/>
       
       <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
        <Select style={{width:"100%"}} placeholder="">{mentors.map((ment,idx)=>{
          return <Select.Option key={idx} value={ment}>{ment}</Select.Option>
        })}</Select>
       <p style={{color:"#707070",margin:"5px"}}>technoligies</p>
        <Select mode='multiple' style={{width:"100%",}} placeholder="">{techno.map((techno,idx)=>{
          return <Select.Option key={idx} value={techno}><button className='drop'>{techno}</button></Select.Option>
        })}</Select>
       
       <br/>
       <br/>
       <p style={{color:"#707070",margin:"5px"}}>Start Date</p>
          <DatePicker style={{width:"100%"}}
          selected={startDate}
          onChange={date=> setstartDate(date)}
          dateFormat=''
          showYearDropdown/>
       <br/>
       <br/>
       <p style={{color:"#707070",margin:"5px"}}>End Date</p>
          <DatePicker style={{width:"100%"}}
          selected={endDate}
          onChange={date=> setendDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          showYearDropdown/>
      </Modal>
    </div>
  )
}

export default Batchlist2