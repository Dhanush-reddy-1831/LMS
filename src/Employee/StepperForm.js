import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import "./Stepper.css"
import Primaryinfo from './Primaryinfo';
import Secondaryinfo from './Secondaryinfo';
import EducationDetails from './EducationDetails';
import BankDetalis from './BankDetails';
import AddressDetails from './AddressDetails';
import TechanicalSkills from './TechnicalSkills';
import Experience from './Experience';
import Contact from './Contact';


function StepperForm() {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };


    const { Step } = Steps;

    const steps = [
      {
        title: 'Primary Info',
        content: <Primaryinfo />,
      },
      {
        title: 'Secondary Info',
        content: <Secondaryinfo />,
      },
      {
        title: 'Education Details',
        content:<EducationDetails />,
      },
      {
        title: 'Address Details',
        content: <AddressDetails/>,
      },
      {
        title: 'Bank Details',
        content: <BankDetalis />,
      },
      {
        title: 'Technical Skills',
        content: <TechanicalSkills />,
      },
      {
        title: 'Experience',
        content: <Experience />,
      },
      {
        title: 'Contact',
        content: <Contact/>,
      },
    ];




  return (
    <div>
 <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
     
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
     
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} id="btn" onClick={() => prev()}>
            Previous
          </Button>
        )}
       
        {current === steps.length - 1 && (
          <Button type="primary"  id="btn" onClick={() => message.success('Processing complete!')}>
           Submit
          </Button>
        )}
       {current < steps.length - 1 && (
          <Button type="primary" id="btn" onClick={() => next()}>
            Next
          </Button>
        )}
      
      </div>
    </>
    





    </div>
  )
}

export default StepperForm