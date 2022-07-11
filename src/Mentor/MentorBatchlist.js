import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./MentorBatchlist.css"; 
import { Button, Input, Layout,Popover,Table, Tooltip} from "antd";
import AttendanceModal from './AttendanceModal';
const { Content } = Layout;




function MentorBacthlist() {
  const [lgShow, setLgShow] = useState(false);
const handleClose=()=>{
  setLgShow(false)
}

    const [dataSource, setDataSource] = useState([
        {
           no:"01",
          batch_id:"#154234653",
            batch_name: "AGCHSD",
            mentor_name:"",
            technologies:"",
            startdate:"",
            enddate:"",
            status:"",
          },
     
    ]);
    // navigate to nextpage
    let navigate=useNavigate()
    let navigateToMentorEmpList=()=>{
        navigate("/MentorEmpList")
    }
    // popover content
    const content = (
      <div>
        <table>
          <tr>
            <th>Initial Strength</th>
            <th id='po1' className="ps-5">100</th>
          </tr>
          <tr>
            <th>Dropout</th>
            <th id='po2' className="ps-5">10</th>
          </tr>
          <tr>
            <th>Terminated</th>
            <th id='po3' className="ps-5">10</th>
          </tr>
          <tr>
            <th>Absconding</th>
            <th id='po4' className="ps-5">10</th>
          </tr>
          <tr>
            <th>Present Strength</th>
            <th id='po5' className="ps-5">70</th>
          </tr>
        </table>
        </div>)
        

    const columns = [
      {
        key: "1",
        title: "No.",
        dataIndex: "no",
        align:"Center",
      },
      {
        key: "2",
        title: "Batch ID",
        dataIndex: "batch_id",
        align:"Center",
      },
      {
        key: "3",
        title: "Batch Name",
        dataIndex: "batch_name",
        align:"Center",
      },
      {
        key: "4",
        title: "Mentor Name",
        dataIndex: "mentor_name",
        align:"Center",
      },
      {
        key: "5",
        title: "Technologies",
        dataIndex: "technoligies",
        align:"Center",
      },
      {
        key: "6",
        title: "Status",
        dataIndex: "status",
        align:"Center",
      },
      {
        key: "7",
        title: "Batch Strength",
        dataIndex: "batch_strength",
        align:"Center",
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
        key: "8",
        title: "", 
        align:"Center",
        render:()=>{
          return(
            <>
             <Button className='attendancebtn' onClick={() => setLgShow(true)}>Attendance</Button>
              <img style={{cursor:'pointer',marginLeft:"10px"}} onClick={navigateToMentorEmpList} src='./Mentor/Xnix-Line-Right Arrow.svg' alt='no'/>
            </>
          )
        }
      },]
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
                    <p className='par'>Batch list</p>
                    <Input className='searc' size='small' placeholder="Search" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />
                </div>
      <Table columns={columns} dataSource={dataSource} rowSelection={true}></Table>
     

              </Content>
              </Layout>
              <AttendanceModal
              lgShow={lgShow}
              handleClose={handleClose}/>
              </Layout>
    </div>
  )
}

export default MentorBacthlist;