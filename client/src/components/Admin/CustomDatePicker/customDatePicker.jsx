
import DatePicker from "react-datepicker";


const CustomDatePicker = ({ selected, onChange, placeholderText }) => {
    return (
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        dateFormat="MMMM d, yyyy" 
        minDate={new Date()} 
        customInput={<CustomInput />} 
        showPopperArrow={false} 
        popperModifiers={{
          preventOverflow: {
            enabled: true,
          },
        }}
      />
    );
  };
  
  const CustomInput = ({ value, onClick }) => (
    <div className="custom-input" onClick={onClick}>
      {value || 'Click to select date'}
    </div>
  );
  
  export default CustomDatePicker;