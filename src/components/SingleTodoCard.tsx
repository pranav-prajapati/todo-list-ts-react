import React, { useEffect, useRef, useState } from 'react'
import { ITodo } from '../interface/InputFeild.interface'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import _ from 'lodash';

interface Props {
    todo: ITodo
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const SingleTodoCard: React.FC<Props> = ({ todo, setTodos, todos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editText, SetEditText] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: string) => {
        setTodos(
            _.map(todos, (elem) => {
                return elem.id === id ? { ...elem, isDone: !elem.isDone } : elem
            })
        )
    }

    const handleDelete = (id: string) => {
        setTodos(
            _.filter(todos, (elem) => {
                return elem.id !== id
            })
        )
    }

    const handleEdit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>, id: string) => {
        e.preventDefault()
        setTodos(_.map(todos, (elem) => {
            return elem.id === id ? { ...elem, todo: editText } : elem
        }))

        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit]);

    return (
        <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)} >
            {(edit && !todo.isDone) &&
                (<input
                    ref={inputRef}
                    value={editText}
                    onChange={(e) => SetEditText(e.target.value)}
                    onBlur={(e) =>
                        !_.isEmpty(editText) ?
                            handleEdit(e, todo.id) :
                            handleDelete(todo.id)
                    }
                    required />
                )}
            {!edit && (todo.isDone ?
                (<s className='todos__single--text'>{todo.todo}</s>)
                :
                (<span className='todos__single--text'>{todo.todo}</span>))
            }
            <span className='icon' onClick={() =>
                !todo.isDone && !edit ? setEdit(true) :
                    setEdit(edit)}><AiFillEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span className='icon' onClick={() => handleDone(todo.id)}><MdDone /></span>
        </form>
    )
}

export default SingleTodoCard
