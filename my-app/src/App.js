import React, { useState } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import countries from "./countries";
import Input from "./Components/Input"



const DropDown = ({ label, value, valid, visited, options,
  onChange, onBlur, onFocus, validationMessage, }) => {
  const invalid = !valid && visited;
  return (
    <div onBlur={onBlur} onFocus={onFocus}>
      <label>
        { label }
        <select
          className={invalid ? "invalid" : ""}
          value={value}
          onChange={onChange}>
          <option key=""></option>
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      { invalid && 
        (<div className="required">{validationMessage}</div>) }
    </div>
  )
}


const requiredValidator = (value) => {
  return value ? "" : "This field is required";
}

export default function App() {

  const [isSpain, setIsSpain] = useState(false); 
  const [isGhana, setIsGhana] = useState(false); 
  const [isBrazil, setIsBrazil] = useState(false);

  const handleIsSpain = (data) => { 
    let country = data.target.value;
    switch(country) {
      case "Spain":
        setIsSpain(true);
        setIsBrazil(false);
        setIsGhana(false);
        break;
      case "Brazil":
        setIsSpain(false);
        setIsBrazil(true);
        setIsGhana(false);
        break;
      case "Ghana":
        setIsSpain(false);
        setIsBrazil(false);
        setIsGhana(true);
        break;
      default:
        setIsSpain(false);
        setIsBrazil(false);
        setIsGhana(false);
    }
  }

  const handleSubmit = (data, event) => {
    console.log(`
      Country: ${data.country}
    `);
    
    event.preventDefault();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        email: "", password: "", country: "", acceptedTerms: false
      }}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit}>
          <h1>Add new employee</h1>

          <Field 
            label="Country:"
            name="country"
            component={DropDown}
            options={countries}
            validator={requiredValidator} 
            onChange={handleIsSpain}/>

          <Field
            label="First Name:"
            name="FistName"
            fieldType="text"
            component={Input}
            validator={[requiredValidator]} />

          <Field
            label="Last Name:"
            name="lastName"
            fieldType="text"
            component={Input}
            validator={[requiredValidator]} />

          <Field
            label="Data Of Birth:"
            name="dataBirth"
            fieldType="date"
            component={Input}
            validator={[requiredValidator]} />
            {isSpain && (<Field
            label=" Marital Of Birth:"
            name="MaritalBirthSpain"
            fieldType="text"
            component={Input}
            validator={[requiredValidator]} />)}
            
            {isSpain && (<Field
            label="Social insurance number:"
            name="SocialInsurance"
            fieldType="text"
            component={Input}
            validator={[requiredValidator]} />)}

            {isGhana && ( <Field
            label=" Marital Of Birth:"
            name="MaritalBirthGhana"
            fieldType="text"
            component={Input}
            validator={[requiredValidator]} />)}

            {isGhana && (<Field
            label="Number Of Children:"
            name="numberChildren"
            fieldType="number"
            component={Input}
            validator={[requiredValidator]} />)}

           {isBrazil && (<Field
            label="Working hours:"
            name="workingHours"
            fieldType="number"
            component={Input}
            validator={[requiredValidator]} />)}

            {isBrazil && (<Field
            label="Holiday Allowance"
            name="holidayAllowance"
            fieldType="number"
            component={Input}
            validator={[requiredValidator]} />)
            }
            {isSpain && (<Field
            label="Holiday Allowance"
            name="holidayAllowance"
            fieldType="number"
            component={Input}
            validator={[requiredValidator]} />)
            }
            
            {isSpain && (<small>Minimum holiday allowance is 30 days</small>)}
            {isBrazil && (<small>Maximum holiday allowance is 40 days</small>)}
          
          <button disabled={!formRenderProps.allowSubmit}>
            Submit
          </button>
        </form>
      )}>
    </Form>
  );
}