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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Developer Role/Position</label>
          <select {...register('position', { required: 'Position is required' })}>
          <option value="" disabled>Select a role</option>
          {developerRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}

        </select>
        {errors.position && <span>{errors.position.message}</span>}

        </div>
        <div>
          <label>Programming Language/Skill Expertise</label>
          {programmingLanguages.map((language) => (
          <div key={language}>
            <input type="checkbox" {...register('skills', { required: 'Skills are required' })} value={language} />
            <label>{language}</label>
          </div>
        ))}
        {errors.skills && <span>{errors.skills.message}</span>}
        </div>
        
      </form>
    );
}

export default Step2