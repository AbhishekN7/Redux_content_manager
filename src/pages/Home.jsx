import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodosAction } from '../redux/actions/todoAction'
export default function Home() {
    const { allTodos } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodosAction())
    }, [])

    return (
        <>
            {JSON.stringify(allTodos)}
            <div>Home</div>
            {
                allTodos.map((item, index) => <h1 key={index}>{item.task}</h1>)
            }
        </>
    )
}
