import React from 'react'
import { useForm } from 'react-hook-form'
import { useStore } from '../../store/userStore';

const FinalStep = ({onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const finalSubmit = (data) => {
      useStore.setState({ finalStep: data });
      onSubmit();
    };
  
    return (
      <form onSubmit={handleSubmit(finalSubmit)}>
        <div>
          <h2>Review your information:</h2>
          <p><strong>Full Name:</strong> {useStore.getState().step1.fullName}</p>
          <p><strong>Email:</strong> {useStore.getState().step1.email}</p>
          <p><strong>Position:</strong> {useStore.getState().step2.position}</p>
          <p><strong>Skills:</strong> {useStore.getState().step2.skills}</p>
          <p><strong>Communication:</strong> {useStore.getState().step3.communication}</p>
          <p><strong>Availability:</strong> {useStore.getState().step3.availability}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}

export default FinalStep