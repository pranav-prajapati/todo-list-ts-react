import React from 'react'
import { ITodo } from '../interface/InputFeild.interface'
import _ from 'lodash';
import SingleTodoCard from './SingleTodoCard';

interface IcardProp {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoCards: React.FC<IcardProp> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                _.map(todos, element => {
                    return  <SingleTodoCard
                    todo={element}
                    todos={todos}
                    key={element.id}
                    setTodos={setTodos} />
                })
            }
          
        </div >
    )
}

export default TodoCards
