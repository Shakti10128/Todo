import Form from "@/components/Form";

import getTodos from "./actions/getTodos";
import TodoLists from "@/components/TodoLists";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-5 w-full">
      <h1 className="text-3xl font-bold text-orange-400">Your Todo</h1>
      <Form/>
      <TodoLists todos={todos}/>
    </div>
  );
}
