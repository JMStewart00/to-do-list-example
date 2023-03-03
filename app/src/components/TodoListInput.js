import React, { useState } from 'react';

function TodoListInput({ addTodo }) {
    // Value inside the "Add a Todo" input textbox
    let [input, setInput] = useState('');

    return (
        <input
            type="text"
            placeholder="Add a Todo"
            className="form-control mb-3"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyUp={e => {
                if (e.key === 'Enter') {
                    addTodo(e.target.value);
                    setInput('');
                }
            }}
        />
    );
}

export default TodoListInput;