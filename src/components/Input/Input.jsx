import React from 'react'

function Input({ change,inputType, inputPlaceholder }) {
    return <input onChange={change} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type={inputType} placeholder={inputPlaceholder}></input>;
}

export default Input;