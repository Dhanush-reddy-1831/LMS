import React from 'react';
import "./AttendanceModal.css";
import { Button, Modal } from 'react-bootstrap';
import { Switch, Table } from 'antd';

function AttendanceModal(props) {
   const handleHide=()=>{
    props.handleClose()
   }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
    const dataSource = [
        {
          key: '1',
          no: '1',
          employee_id: 324,
          employee_name: 'Teja',
        },
        {
          key: '2',
          no: '2',
          employee_id: 42,
          employee_name: 'Dhanush',
        },
      ];
      
      const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
        },
        {
          title: 'Employee ID',
          dataIndex: 'employee_id',
          key: 'employee_id',
        },
        {
          title: 'Employee Name',
          dataIndex: 'employee_name',
          key: 'employee_name',
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
            render:()=>{
                return(

                    <div className='switchclr'>
                    <p>M</p>
                     <Switch defaultChecked onChange={onChange} />
                    <p>N</p>
                     <Switch defaultChecked onChange={onChange} />
                     </div>
                )
            
        }
    },
];
   
      
      
      return (
          <div>
        <Modal
        size="lg"
        show={props.lgShow}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className='heading' id="example-modal-sizes-title-lg">
            Attendance for (dd-MM-yyyy)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AttendanceModal