import React, { useState } from 'react'
import DynamicField from './DynamicField';
export const Dynamicform = ({fields}) => {

    const [formvalues, setValues] = useState({});
    function handleSubmit() {
        //console.log(data);
        console.log("formvalues",formvalues);
    }

    function handleChanged(event){
        setValues(currentValues => {
            currentValues[event.target.name] = event.target.value;
            return currentValues;
        });
    }
    return (
        <form >
            {fields.map((d, i) => (
                 <div className="form-group">
                    <label htmlFor={d.fieldName}>{d.label}</label>
                    <DynamicField fielddata={d} handleChanged={handleChanged} />
                </div>
            ))}
            <div className="form-group mt-2">
                 <button type="button" className='btn btn-info' onClick={handleSubmit} >
                Submit
                </button>
            </div>
       
        </form>
    )
}
