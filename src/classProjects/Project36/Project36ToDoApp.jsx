import React, { useState } from 'react'
import nextId from 'react-id-generator';
import NavBarCP from '../NavBarCP';
import './Project36_styles.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



function Project36ToDoApp() {
    const[tasks, setTasks] = useState(['Task 1', 'Task 2']);
    const[task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e);
    };

    const createTask =(e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask('');
    };

    const deleteTask = (index) => {
        let tempArrayItem = tasks[index];
        setTasks(tasks.filter((t) => t !== tempArrayItem))
    };

  return (
    <div className="app-container">
        <NavBarCP />
        <div className="content" >
            <h1>To Do List</h1>

                <form id ='taskInput' onSubmit={createTask}>
                    <label htmlFor="task">Create Task</label>
                    <InputText
                    required
                    id="task"
                    value={task}
                    onChange={(e) => handleChange(e.target.value)}
                />
                    <Button id='taskSubmit' label="Enter" className="p-button-raised p-button-help" />
                </form>

<table>
    <tbody>
        <tr>
            <th></th>
            <th>Tasks</th>
            <th></th>
        </tr>
        {tasks.map((t, i) => (
            <tr key={nextId()}>
                <td>{i + 1}</td>
                <td>{t}</td>
                <td>
                    <i className="pi pi-trash" 
                    id='taskDelete' 
                    onClick={() => deleteTask(i)}
                    ></i>
                </td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
</div>
    );
}

export default Project36ToDoApp