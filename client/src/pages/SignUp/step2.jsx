import React from 'react'
import { useStore } from '../../store/userStore';
import { useForm} from 'react-hook-form';
const Step2 = ({onNext,onBack}) => {

  const { step2 } = useStore();
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues:step2
    });
    const developerRoles = [
      'Front-end Developer',
      'Back-end Developer',
      'Full-stack Developer',
      'DevOps Engineer',
    ];

    const programmingLanguages = [
      'JavaScript',
      'Python',
      'Java',
      'C#',
      'Ruby',
      
    ];
    
  
    const onSubmit = (data) => {
      useStore.setState({ step2: data });
      onNext();
    };
  
    return (
      <div className="step-container">
        <form onSubmit={handleSubmit(onSubmit)} className="step-content">
           <h2 className="step-heading">Let's Tailor Your Developer Profile</h2>
        <p className="step-para">Share your role and programming skills </p>
        <div className="step-label">
          <label>Developer Role/Position</label>
          <select {...register('position', { required: 'Position is required' })} className="step-dropdown">
            <option value="" disabled>Select a role</option>
            {developerRoles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          {errors.position && <span className="step-error">{errors.position.message}</span>}
        </div>
        <div className="step-label">
          <label>Programming Language/Skill Expertise</label>
          {programmingLanguages.map((language) => (
            <div key={language} className="step-checkbox">
              <input
                type="checkbox"
                {...register('skills', { required: 'Skills are required' })}
                value={language}
                id={`checkbox-${language}`}
                className="checkbox-input"
              />
              <label htmlFor={`checkbox-${language}`}>{language}</label>
            </div>
          ))}
          {errors.skills && <span className="step-error">{errors.skills.message}</span>}
        </div>
        <div className="step-buttons">
          <button type="button" onClick={onBack} className="back-btn">Back</button>
          <button type="submit" className="step-button">Next</button>
        </div>
            </form>
      </div>
    );
}

export default Step2