import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['Buy milk', 'Learn React', 'Profit']
        };
    }

    addItem(e) {
        e.preventDefault();
        console.log('Submit');
    }

    render() {
        const items = this.state.items.map((item, index) => (
            <li className="todo-item" key={index}>
                {item}
            </li>
        ));

        return (
            <div className="app">
                <ul className="todo-list">{items}</ul>
                <form className="add-form" onSubmit={e => this.addItem(e)}>
                    <label htmlFor="textInput">Item to add</label>
                    <input type="text" id="textInput" />
                    <button>Add item</button>
                </form>
            </div>
        );
    }
}
