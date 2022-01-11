import {  useState } from "react";
import { GoAlert } from "react-icons/go"
import "../assets/css/forminput.css"

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;


  const handleFocus = (e) => {
    setFocused(true);
   
  };

  return (
   <div className="formInput-content">
    <div className="formInput" >
      <label className="form__label">{label}</label>
      <input
      className="form__field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          setFocused(true)
        }
      
        focused={ focused.toString() }
      />
   <span ><GoAlert style={{margin: "0 .5rem"}} />{ errorMessage }</span>
    </div>
 </div>
  );
};

export default FormInput;
