import React from 'react'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import FinalStep from './finalstep';
import { useStore} from '../../store/userStore';
import { useStep } from '../../hooks/signup/step';
import Navbar from '../../layout/navbar/Navbar';

const SignupForm = () => {
    const { next, currentStep,back, reset } = useStep();
    const { finalStep } = useStore();
  
    const onSubmit = (data) => {
      if (currentStep === 1) {
        useStore.setState({ step1: data });
      } else if (currentStep === 2) {
        useStore.setState({ step2: data });
      } else if (currentStep === 3) {
        useStore.setState({ step3: data });
      } else if (currentStep === 4) {
        useStore.setState({ finalStep: data });
      }
  
      if (currentStep < 4) {
        next();
      } else {
        console.log('Final form data submitted:', finalStep);
        // You can send the data to your server or perform any necessary actions here
        reset(); // Reset the form after submission
      }
    };
  
    return (
      <div>
        <Navbar isVisible={false} showAdminbtn={true}/>
        <div>
          {currentStep === 1 && <Step1 onNext={next}  />}
          {currentStep === 2 && <Step2 onNext={next} onBack={back} />}
          {currentStep === 3 && <Step3 onNext={next} onBack={back}/>}
          {currentStep === 4 && <FinalStep onSubmit={onSubmit} onBack={back}/>}
        </div>
      </div>
    );
}

export default SignupForm