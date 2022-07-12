import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodoAction } from '../redux/actions/todoAction';

export default function Todo() {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const handleAddTodo = () => {
        dispatch(addTodoAction({ task }))
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-6 offset-sm-3"></div>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} className='form-control' />
                <br /><br />
                <button type='button' onClick={handleAddTodo} className='btn btn-primary'>Click</button>
            </div>
        </div>
    )
}
