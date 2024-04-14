'use client'
import React, { useState } from 'react'

const Todo = () => {

    // let a = 10;
    // const [a, setA] = useState(10);
    const [todoList, setTodoList] = useState([
        { task: 'Do Homework', completed: false },
        { task: 'eat food', completed: false },
        { task: 'play games', completed: false },
    ]);

    const addTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);
        }
    }

    return (
        <div className='container py-5'>
            <h2 className='text-center'>Todo App</h2>
            <hr />
            <div className='card'>
                <div className='card-header'>
                    <input onKeyDown={addTask} type="text" className='form-control border-primary border-2' />
                </div>
                <div className='card-body'>
                    {
                        todoList.map((item, index) => {
                            return <div key={index} className='d-flex justify-content-between p-3'>
                                <p>{item.task}</p>
                                <button className='btn btn-danger'>check</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo