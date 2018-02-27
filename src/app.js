import React from 'react';

import TodoList from './todo-list';
import AddForm from './add-form';

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
                <AddForm
                    onInputUpdated={e => this.setState({value: e.target.value})}
                    onItemAdd={e => this.addItem(e)}
                />
            </div>
        );
    }
}
