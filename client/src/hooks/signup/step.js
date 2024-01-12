import { useState } from 'react';

export const useStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    setCurrentStep((step) => step + 1);
  };

  const back =()=>{
    setCurrentStep((step)=> step-1)
  }

  const reset = () => {
    setCurrentStep(1);
  };

  return { currentStep, next, back,reset };
};
