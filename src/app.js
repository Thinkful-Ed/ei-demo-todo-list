import React from 'react';

import TodoList from './todo-list';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['Buy milk', 'Learn React', 'Profit'],
            value: ''
        };
    }

    addItem(e) {
        e.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.value]
        });
    }

    render() {
        return (
            <div className="app">
                <TodoList items={this.state.items} />
                <form className="add-form" onSubmit={e => this.addItem(e)}>
                    <label htmlFor="textInput">Item to add</label>
                    <input
                        type="text"
                        id="textInput"
                        value={this.state.value}
                        onChange={e => this.setState({value: e.target.value})}
                    />
                    <button>Add item</button>
                </form>
            </div>
        );
    }
}
