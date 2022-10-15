import DropDown from '../Dropdown/DropDown'
import TableData from '../Table/TableData';

function Body({ list,checked,onRemove,filter,sort }) {

    const optionList = ["all", "completed", "not completed"];
    const optionList2 = ["ascending", "descending"];

    return (
        <>
            <div className="row m-1 p-3 px-5 justify-content-end">
                <div className="col-auto d-flex align-items-center">
                    <DropDown change={filter} label="Filter" list={optionList}></DropDown>
                </div>
                <div className="col-auto d-flex align-items-center px-1 pr-3">
                    <DropDown change={sort} label="Sort" list={optionList2}></DropDown>
                    <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                    <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
                </div>
            </div>

            <div className="row mx-1 px-5 pb-3 w-80">
                <div className="col mx-auto">
                    <TableData onRemove={onRemove} checked={checked} list={list}></TableData>
                </div>
            </div>
        </>
    )
}

export default Body;