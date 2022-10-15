import React from 'react'

function Input({ check,className, value, change, inputType, inputPlaceholder }) {
    return <input checked={check} onChange={change} className={`${className ? className : "form-control form-control-lg border-0 add-todo-input bg-transparent rounded"}`} type={inputType} placeholder={inputPlaceholder} value={value}></input>;
}

export default Input;