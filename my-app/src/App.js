import React, { useState } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import countries from "./countries";
import Input from "./Components/Input";
import DropDown from "./Components/DropDown"

export default function App() {

  const [isSpain, setIsSpain] = useState(false); 
  const [isGhana, setIsGhana] = useState(false); 
  const [isBrazil, setIsBrazil] = useState(false);
  const [countryHoliday, setCountryHoliday] = useState("");

  const validationNumber = (value) => {
    let test = value.toString();
    if(countryHoliday === "Spain") {
      return test < 30 ? "In Spain Minimum holiday allowance is 30 days" : "";
    } else if (countryHoliday === "Brazil") {
      return test > 40 ? " In Brazil Maximum holiday allowance is 40 days" : "";
    }
  }

  const requiredValidator = (value) => {
    return value ? "" : "This field is required";
  }

  const handleIsSpain = (data) => { 
    let { value } = data.target;
    setCountryHoliday(value);
    switch(value) {
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
      New employee Information: ${JSON.stringify(data)}
    `);
    
    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <Form
          initialValues={{
            country: "",
            firstName: "",
            lastName: "",
            dataBirth: "",
            SocialInsurance: "",
            MaritalBirthGhana: "",
            numberChildren: "",
            workingHours: "",
            holidayAllowance: ""
          }}
            onSubmit={handleSubmit}
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
            name="firstName"
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

          <Field
            label="Holiday Allowance"
            name="holidayAllowance"
            fieldType="number"
            component={Input}
            validator={[requiredValidator, validationNumber]}
             />
          
          <button data-testid="submit-new-employee" disabled={!formRenderProps.allowSubmit}>
            Submit
          </button>
        </form>
      )}>
    </Form>
          </div>
        </div>
      </div>
    </>
  );
}