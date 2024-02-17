import React from 'react'

const DynamicField = ({fielddata,handleChanged}) => {


  
      switch (fielddata.inputType) {
        case "text":
          return (
            <input
              id={fielddata.fieldName}
              type="text"
              name={fielddata.fieldName}
              className='form-control'
              defaultValue={fielddata.defaultValue}
              onChange={handleChanged}
            />
          );
        case "select": {
          return (
            <select
            className='form-control'
              defaultValue={fielddata.defaultValue}
              name={fielddata.fieldName}
              id={fielddata.fieldName}
              onChange={handleChanged}
            >
              {fielddata.options.map((o, index) => (
                <option key={index} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          );
        }
        case "number":
          return (
            <input
              type="number"
              name={fielddata.fieldName}
              className='form-control'
              id={fielddata.fieldName}
              onChange={handleChanged}
              defaultValue={fielddata.defaultValue}
            />
          );
          case "textarea":
          return (
            <textarea
              name={fielddata.fieldName}
              className='form-control'
              id={fielddata.fieldName}
              onChange={handleChanged}
              defaultValue={fielddata.defaultValue}
            />
          );
        default:
          return <input
          id={fielddata.fieldName}
          type="text"
          name={fielddata.fieldName}
          className='form-control'
          onChange={handleChanged}
          defaultValue={fielddata.defaultValue}
        />
      }

  
}

export default DynamicField

