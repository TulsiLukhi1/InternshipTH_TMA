import React from 'react'
import { useForm} from 'react-hook-form';
import { useStore } from '../../store/userStore';
import './signup.css'


const Step3 = ({onNext,onBack}) => {
  const { step3 } = useStore();
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues:step3
    });
    const communicationChannels = [
      'Google Chat',
      'Slack',
      'Microsoft Teams',
      'Other',
    ];
    
    const availabilities = [
      '9am to 6pm',
      '9pm to 6am',
    ];
    
  
    const onSubmit = (data) => {
      useStore.setState({ step3: data });
      onNext();
    };
  
    return (
      <div className="step-container">
        <form className="step-content" onSubmit={handleSubmit(onSubmit)}>
        <h2 className='step-heading'>Let's Stay Connected!</h2>
        <p className='step-para'>Share your preferences</p>
        <div>
          <label className="step-label">Preferred Communication Channel</label>
          <select className="step-dropdown" {...register('communication', { required: 'Communication channel is required' })}>
            <option value="" disabled>Select a channel</option>
            {communicationChannels.map((channel) => (
              <option key={channel} value={channel}>{channel}</option>
            ))}
          </select>
          {errors.communication && <span className="step-error">{errors.communication.message}</span>}
        </div>
        <div>
          <label className="step-label">Availability</label>
          {availabilities.map((availability) => (
            <div key={availability} className='step-checkbox'>
              <input type="radio" className='checkbox-input' {...register('availability', { required: 'Availability is required' })} value={availability} />
              <label>{availability}</label>
            </div>
          ))}
          {errors.availability && <span className="step-error">{errors.availability.message}</span>}
        </div>
        <div className="step-buttons">
          <button type="button" onClick={onBack} className="back-btn">Back</button>
          <button type="submit" className="step-button">Next</button>
        </div>
            </form>
      </div>
    );
}

export default Step3