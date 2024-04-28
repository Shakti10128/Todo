import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

interface Iparams{
    id:string
}

export async function DELETE(
    request:Request,
    {params}:{params:Iparams}
){
    await prisma.todo.delete({
        where:{
            id:params.id
        }
    })

    return NextResponse.json("Task Deleted");
}