export interface IProps{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

export interface ITodo{
    id:string;
    todo:string;
    isDone:boolean
}