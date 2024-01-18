import React, { useState } from 'react';
import './customDropdown.css';

const CustomDropdown = ({ selectedValue, onSelectFromList , dropdownList }) => {
  const [isCustomListVisible, setCustomListVisibility] = useState(false);
  const [customSearch, setCustomSearch] = useState('');




  const handleCustomSelect = (item) => {
    onSelectFromList(item);
    setCustomListVisibility(false);
  };

  const handleSearch = (event) => {
    setCustomSearch(event.target.value);
  };

  const filteredList = dropdownList.filter((item) =>
    item.toLowerCase().includes(customSearch.toLowerCase())
  );

  return (
    <div className="custom-dropdown">
      <div
        className={`selected-item ${isCustomListVisible ? 'active' : ''}`}
        onClick={() => setCustomListVisibility(!isCustomListVisible)}
      >
        {selectedValue}
      </div>
      {isCustomListVisible && (
        <div className="custom-list">
          <input
          className='dropdown-input'
            type="text"
            placeholder="Search developers"
            value={customSearch}
            onChange={handleSearch}
          />
          <ul>
            {filteredList.map((item) => (
              <li key={item} onClick={() => handleCustomSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
