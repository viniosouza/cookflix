import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <>
      <label>
        {label}
        <input type={type} value={value} name={name} onChange={onChange} />
      </label>
    </>
  );
}
export default FormField;
