import { NextResponse } from "next/server";


export function GET(request: Request) {
    return NextResponse.json({data: 'Hello world'}, {status: 200})
}