'use client'

import { Todo } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"

interface TodoListsProps{
    todos: Todo[] | undefined
}

const TodoLists:React.FC<TodoListsProps> = ({
    todos
}) => {
    const router =  useRouter();

    const todoDeleteHandler = async(id:string)=>{
        try {
            await axios.delete(`/api/Todo/${id}`).then(()=>{
                router.refresh();
            })
        } catch (error) {
            console.log("Error while deleting Task");
        }
    }

    if(todos === undefined || todos.length === 0) {
        return(
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold text-orange-400">No Task 😥</h1>
            </div>
        )
    }

  return (
    <div className="flex flex-col gap-3 w-[800px] max-h[800px] overflow-hidden">
        {
            todos.map((todo)=>{
                return (
                    <div className="flex justify-between items-center bg-orange-400 p-5" key={todo.id}>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl font-bold">{todo.title}</p>
                            <p>{todo.description}</p>
                        </div>
                        <button className="flex justify-center items-center cursor-pointer text-2xl bg-orange-400 text-white border rounded-full
                        h-10 w-10"
                        onClick={()=>todoDeleteHandler(todo.id)}
                        >
                            X
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TodoLists