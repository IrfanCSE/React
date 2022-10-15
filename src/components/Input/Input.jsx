import React from 'react'

function Input({ inputType, inputPlaceholder }) {
    return <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type={inputType} placeholder={inputPlaceholder}></input>;
}

export default Input;