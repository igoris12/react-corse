import React from 'react'
import Todos from './Todos'

export default function TodoList({ todos }) {

    return (
        todos.map(todo => {
            return <Todos id={todo} todo={todo} />
        })
    )
}