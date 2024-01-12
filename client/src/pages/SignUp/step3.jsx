import React from 'react'
import { useForm} from 'react-hook-form';
import { useStore } from '../../store/userStore';
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Preferred Communication Channel</label>
          <select {...register('communication', { required: 'Communication channel is required' })}>
          <option value="" disabled>Select a channel</option>
          {communicationChannels.map((channel) => (
            <option key={channel} value={channel}>{channel}</option>
          ))}
        </select>
        {errors.communication && <span>{errors.communication.message}</span>}
      
        </div>
        <div>
          <label>Availability</label>
          {availabilities.map((availability) => (
          <div key={availability}>
            <input type="radio" {...register('availability', { required: 'Availability is required' })} value={availability} />
            <label>{availability}</label>
          </div>
        ))}
        {errors.availability && <span>{errors.availability.message}</span>}
        </div>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </form>
    );
}

export default Step3