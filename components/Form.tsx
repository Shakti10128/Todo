'use client'


import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react'


const Form = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const router = useRouter();


    const SubmitHandler =  async()=>{
        if(title.length === 0){
            alert("Title in empty");
            return;
        }
        else if(description.length === 0) {
            alert("Description is empty");
            return;
        }
        try {
           await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Todo`,{
                title,
                description
            }).then((data)=>{
                router.refresh();
            })
        } catch (error) {
            alert("Error in adding task");
        }
    }

  return (
    <div className="flex flex-col gap-3 w-[350px]  sm:w-[800px] mx-5">
        <input type="text" placeholder="Title" className="w-full border border-black rounded-md p-2"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <input type="text" placeholder="Description" className="border border-black rounded-md p-2"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />
        <button type='submit' className="bg-orange-400 p-2 border rounded-md border-black"
        onClick={SubmitHandler}
        >
          Add Task
        </button>
    </div>
  )
}

export default Form