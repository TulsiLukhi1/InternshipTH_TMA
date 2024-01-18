// FinalStep.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../../store/userStore";
import "./signup.css";

const FinalStep = ({ onSubmit, onBack }) => {
  const { handleSubmit } = useForm();

  const finalSubmit = (data) => {
    useStore.setState({ finalStep: data });
    onSubmit();
  };

  return (
    <div className="step-container">
      <form onSubmit={handleSubmit(finalSubmit)}>
        <div className="step-content">
          <h2 className="step-heading">Hey! It's final Step</h2>
          <p className="step-para">
            One last look. Ensure everything is just right!
          </p>
          <div className="step-info">
            <p>
              <strong>Full Name:</strong> {useStore.getState().step1.fullName}
            </p>
            <p>
              <strong>Email:</strong> {useStore.getState().step1.email}
            </p>
            <p>
              <strong>Position:</strong> {useStore.getState().step2.position}
            </p>
            <p>
              <strong>Skills:</strong> {useStore.getState().step2.skills}
            </p>
            <p>
              <strong>Communication:</strong>{" "}
              {useStore.getState().step3.communication}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {useStore.getState().step3.availability}
            </p>
          </div>
          <p className="back-message">
            Want to update information?{" "}
            <button type="button" onClick={onBack} className="link-button">Back</button>

          </p>
          <button type="submit" className="step-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalStep;
