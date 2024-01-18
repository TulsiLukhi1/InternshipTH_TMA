import React, { useState } from 'react';
import './statusDropdown.css';

const StatusDropdown = ({ status, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectStatus = (selectedStatus) => {
    onChange(selectedStatus);
    setIsOpen(false);
  };

  return (
    <div className="status-dropdown">
      <div className={`status-toggle ${status.toLowerCase()}`} onClick={toggleDropdown}>
        {status}
      </div>
      {isOpen && (
        <div className="status-options">
          <div className="status-option" onClick={() => selectStatus('Pending')}>
            Pending
          </div>
          <div className="status-option" onClick={() => selectStatus('InProgress')}>
            In Progress
          </div>
          <div className="status-option" onClick={() => selectStatus('Done')}>
            Done
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
