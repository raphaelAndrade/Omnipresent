import React, { useState } from "react";
import countries from "./countries";
import './App.css';

export default function App() {
  const [firstName, setFirstname] = useState(""); 
  const [lastName, setlastName] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [dataOfBirth, setBirth] = useState(""); 
  const [maritalStatus, setMaritalStatus] = useState(""); 
  const [holidayAllowance, setHolidayAllowance] = useState("");
  const [socialNumber, setSocialNumber] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [isSpain, setIsSpain] = useState(false); 
  const [isGhana, setIsGhana] = useState(false); 
  const [isBrazil, setIsBrazil] = useState(false); 
  const [acceptedTerms, setAcceptedTerms] = useState(false);



  const handleSubmit = (event) => {
    console.log(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Country: ${country}
      Marital Status: ${maritalStatus}
      Holiday Allowance: ${holidayAllowance}
      Social Number: ${socialNumber}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }

  const handleIsSpain = (country) => {
    if(country === "Spain") {
      setIsSpain(true);
      setIsBrazil(false);
      setIsGhana(false);
    } else if(country === "Brazil") {
      setIsSpain(false);
      setIsBrazil(true);
      setIsGhana(false);
    } else if(country === "Ghana") {
      setIsSpain(false);
      setIsBrazil(false);
      setIsGhana(true);
    } else {
      setIsSpain(false);
      setIsBrazil(false);
      setIsGhana(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => {
            handleIsSpain(e.target.value);
            setCountry(e.target.value)
          } }
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={e => setFirstname(e.target.value)}
          required />
      </label>
      
      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={e => setlastName(e.target.value)}
          required />
      </label>

      <label>
        Data Of Birth:
        <input
          name="dataOfBirth"
          type="date"
          value={dataOfBirth}
          onChange={e => setBirth(e.target.value)}
          required />
      </label>

      { isSpain ? <><label>
        Marital Of Birth:
        <input
          name="maritalBirth"
          type="text"
          value={maritalStatus}
          onChange={e => setMaritalStatus(e.target.value)}
          required />
      </label><label>
          Social insurance number :
          <input
            name="socialInsurance"
            type="text"
            value={socialNumber}
            onChange={e => setSocialNumber(e.target.value)}
            required />
        </label></>:
      null
      }

      {isGhana ? <><label>
        Marital Of Birth:
        <input
          name="maritalBirth"
          type="text"
          value={maritalStatus}
          onChange={e => setMaritalStatus(e.target.value)}
          required />
      </label><label>
          Social insurance number :
          <input
            name="numberOfChildren"
            type="number"
            value={numberOfChildren}
            onChange={e => setSocialNumber(e.target.value)}
            required />
        </label></>:
      null
      }

      {isBrazil ? 
        <label>
          Working hours
          <input
            name="dataOfBirth"
            type="number"
            value={dataOfBirth}
            onChange={e => setBirth(e.target.value)}
            required />
        </label> : null
       }

      <label>
        Holiday Allowance:
        <input
          name="holidayAllowance"
          type="number"
          minLength={30}
          value={holidayAllowance}
          onChange={e => setHolidayAllowance(e.target.value)}
          required />
      </label>
      {isSpain ? <small>Minimum holiday allowance is 30 days</small> : null}
      {isBrazil ? <small>Maximum holiday allowance is 40 days</small> : null}

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service        
      </label>

      <button>Submit</button>
    </form>
  );
}




