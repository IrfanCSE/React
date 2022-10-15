import Button from '../Button/Button'
import Input from "../Input/Input";

function TableData({onRemove,checked, head, list }) {
    return (
        <>
            <table className="table table-borderless">
                {
                    head ?
                        <thead>
                            <tr>
                                {head.map((value,i) => <th key={i} scope="col">{value}</th>)}
                            </tr>
                        </thead>
                        : null
                }
                <tbody>
                    {
                        list?.map((value, index) => {
                            return (
                                <tr key={value?.value}>
                                    <td scope="row"><Input change={(e)=>checked(value?.value,e.target.checked)} check={value.mark} className={"checkbox"} inputType="checkbox" ></Input></td>
                                    <td className='word-wrap'>{value?.label}</td>
                                    <td><Button className="btn btn-danger" clickEvent={()=>onRemove(value?.value)} buttonType="button" label="Remove"></Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableData;