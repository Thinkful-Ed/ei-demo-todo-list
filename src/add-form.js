import React from 'react';

export default function AddForm(props) {
    return (
        <form className="add-form" onSubmit={e => props.onItemAdd(e)}>
            <label htmlFor="textInput">Item to add</label>
            <input
                type="text"
                id="textInput"
                value={props.inputValue}
                onChange={e => props.onInputUpdated(e)}
            />
            <button>Add item</button>
        </form>
    );
}
