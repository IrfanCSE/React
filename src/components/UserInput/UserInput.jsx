import Input from '../Input/Input';
import Button from '../Button/Button'

function UserInput({ changeState }) {

    let inputField = "";

    const onInputChange = (e) => {
        inputField = e.target.value
    }

    const addInputField = () => {
        changeState(inputField);
    }

    return (
        <div className="row m-1 p-3">
            <div className="col col-11 mx-auto">
                <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div className="col">
                        <Input change={onInputChange} inputPlaceholder="Add" inputType="text"></Input>
                    </div>
                    <div className="col-auto m-0 px-2 d-flex align-items-center">
                        <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                        <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                        <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                        <Button clickEvent={addInputField} buttonType="button" label="Add"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInput;