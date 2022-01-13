import React, { useState } from "react";
import countries from "./countries";
import './App.css';

export default function App() {
  const [firstName, setFirstname] = useState(""); // email
  const [lastName, setlastName] = useState(""); // Password
  const [country, setCountry] = useState(""); // country
  const [dataOfBirth, setBirth] = useState(""); // country
  const [maritalStatus, setMaritalStatus] = useState(""); // country
  const [holidayAllowance, setHolidayAllowance] = useState(""); // country
  const [isSpain, setIsSpain] = useState(false); // country
  const [isGhana, setIsGhana] = useState(false); // country
  const [isBrazil, setIsBrazil] = useState(false); // country
  const [acceptedTerms, setAcceptedTerms] = useState(false); // accepted



  const handleSubmit = (event) => {
    console.log(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Country: ${country}
      Marital Status: ${maritalStatus}
      Holiday Allowance: ${holidayAllowance}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }

  const handleIsSpain = (country) => {
    if(country === "Spain") {
      setIsSpain(true)
    } else {
      setIsSpain(false)
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

      { isSpain ? <label>
        Marital Of Birth:
        <input
          name=""
          type="text"
          value={maritalStatus}
          onChange={e => setMaritalStatus(e.target.value)}
          required />
      </label> :
      null
      }

      <label>
        Holiday Allowance:
        <input
          name="holidayAllowance"
          type="number"
          value={holidayAllowance}
          onChange={e => setHolidayAllowance(e.target.value)}
          required />
      </label>

      

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

