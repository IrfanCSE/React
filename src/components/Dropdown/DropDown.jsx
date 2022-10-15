
function DropDown({ change, label, list }) {
    return (
        <>
            <label className="text-secondary my-2 pr-2 view-opt-label">{label}</label>
            <select onChange={(e) => change(e.target.value)} className="custom-select custom-select-sm btn my-2">
                {list.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
        </>
    )
}

export default DropDown;