// inputfield
import React, { useRef } from 'react'
import './styles.css'
import { IProps } from '../interface/InputFeild.interface'


const InputField: React.FC<IProps> = ({ todo, setTodo, handleSubmit }) => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <div>
            <form className='input'>
                <input
                    ref={ref}
                    type='text'
                    className='input__box'
                    placeholder='Enter a task'
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }} />
                <button type="submit" className="input_submit" onClick={(e) => {
                    handleSubmit(e)
                    ref.current?.blur()
                }}>
                    GO
                </button>
            </form>
        </div>
    )
}

export default InputField
