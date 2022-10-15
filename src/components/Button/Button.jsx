
function Button({ className, clickEvent, buttonType, label }) {
    return (
        <button onClick={clickEvent} type={buttonType} className={className ? className : "btn btn-primary"} > {label}</button >
    )
}

export default Button;