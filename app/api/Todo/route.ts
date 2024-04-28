import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request:Request,
){
    const body = await request.json();

    const {title,description} = body;
    await prisma.todo.create({
        data:{
            title,
            description
        }
    })

    return NextResponse.json("Task Added");
}