import React, { Fragment, useRef, useState } from 'react'

const Checkbox = ({label, handleCheck}) => {//{refer,name,id, CText}
const [isChecked, setIsChecked] = useState(false);
const onHandle = (e) =>{
  setIsChecked(!isChecked)
  handleCheck(e)
}
  
  return (
    <Fragment>
      <label
        // htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
          //  ref={refer}
            type="checkbox"
            // id={id}
            value={label}
            // checked={checked}
            // name={name}
            className="sr-only"
            // onChange={() =>setIsChecked(!isChecked)}
            onChange={(e)=>onHandle(e)}
          />
          <div
            className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
            ></span>
          </div>
        </div>
        {label}
      </label>
    </Fragment>
  )
}

export default Checkbox
