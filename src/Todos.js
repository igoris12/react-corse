import React from 'react'

export default function Todos({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complite} />
                {todo.name}
            </label>

        </div>
    )
}