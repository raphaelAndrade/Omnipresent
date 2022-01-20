 const Input = (fieldProps) => {
    const {
      fieldType, label, value, visited, touched, valid,
      onChange, onBlur, onFocus, validationMessage, 
    } = fieldProps;
    const invalid = !valid && visited;
    return (
      <div onBlur={onBlur} onFocus={onFocus}>
        <label className="form-label">
          { label }
          <input
            type={fieldType}
            className={invalid ? "invalid" : "" }
            value={value}
            onChange={onChange} />
        </label>
        { invalid && 
          (<div className="required">{validationMessage}</div>) }
      </div>
    );
  };
  export default Input;