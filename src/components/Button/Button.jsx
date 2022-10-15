
function Button({ clickEvent, buttonType, label }) {
    return (
        <button onClick={clickEvent} type={buttonType} className="btn btn-primary">{label}</button>
    )
}

export default Button;