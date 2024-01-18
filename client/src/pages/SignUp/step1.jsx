import React from 'react'
import { useForm } from 'react-hook-form'
import { useStore } from '../../store/userStore';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import './signup.css'

const Step1Schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat Password is required'),
});

const Step1 = ({onNext}) => {
  const {step1} = useStore();
    const {register,handleSubmit,formState:{errors}}=useForm(
      {
        defaultValues: step1,
        resolver:yupResolver(Step1Schema)
      }
    );

    const onSubmit = (data) => {
        useStore.setState({ step1: data });
        console.log(useStore.getState().step1);
        onNext();
    };

  return (
    <div className="step-container">
      <div className="step-content">
      <h2 className='step-heading'>Welcome to Our Registration</h2>
      <p className='step-para'>Let's get started... Please provide the followig information</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="step-label">Full Name</label>
            <input className="step-input" {...register('fullName')} />
            {errors.fullName && <span className="step-error">{errors.fullName.message}</span>}
          </div>
          <div>
            <label className="step-label">Email</label>
            <input className="step-input" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} />
            {errors.email && <span className="step-error">{errors.email.message}</span>}
          </div>
          <div>
            <label className="step-label">Password</label>
            <input className="step-input" type="password" {...register('password')} />
            {errors.password && <span className="step-error">{errors.password.message}</span>}
          </div>
          <div>
            <label className="step-label">Repeat Password</label>
            <input className="step-input" type="password" {...register('repeatPassword')} />
            {errors.repeatPassword && <span className="step-error">{errors.repeatPassword.message}</span>}
          </div>
          <button className="step-button" type="submit">Next</button>
        </form>
      </div>
    </div>
  )
}

export default Step1