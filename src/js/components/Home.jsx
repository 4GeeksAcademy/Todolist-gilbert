import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleDelete = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="container">
            <h1 className="todo-header">todos</h1>
            
            <div className="todo-wrapper">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Apunta algo que hacer"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />

                <ul className="list-group list-group-flush">
                    {todos.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <span>{item}</span>
                            
                            <span 
                                className="delete-btn"
                                onClick={() => handleDelete(index)}
                            >
                                ✕
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="todo-footer">
                    {todos.length === 0 ? "Estas libre" : `${todos.length} ${todos.length !== 1 ? "Tareas pendientes" : "Tarea pendiente"}`}
                </div>
            </div>
        </div>
    );
};

export default Home;