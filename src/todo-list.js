import React from 'react';

export default function TodoList(props) {
    const items = props.items.map((item, index) => (
        <li className="todo-item" key={index}>
            {item}
        </li>
    ));
    return <ul className="todo-list">{items}</ul>;
}
