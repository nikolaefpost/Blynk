import React, {FC} from 'react';

interface IForm {
    value: string;
    handleAction: () => void;
    updateText: (text: string) => void;
}

const ItemForm: FC<IForm> = ({value, handleAction, updateText}) => {
    return (
        <form>
            <input
                value={value}
                onChange={(e => updateText(e.target.value))}
                type="text"
                placeholder="type name here..."
            />
            <button onClick={(e) => {
                e.preventDefault()
                handleAction()
            }}>Add new</button>

        </form>
    );
};

export default ItemForm;