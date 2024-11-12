import { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    console.log(request.headers);
}

export const config = {
    matcher: [
        "/login",
        "/account"
    ]
}