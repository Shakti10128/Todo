import primsa from '@/app/libs/prismadb';


export default async function getTodos(){
    const todos = await prisma?.todo.findMany();
    return todos;
}