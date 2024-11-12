import { redirect } from "next/navigation";
import { cookies,headers } from 'next/headers';

export async function loginUser(prevState : { message : string },formData:FormData){
    let req = null;
    const rawData = {
        email:formData.get('email'),
        password:formData.get('password')
    };
    try {
        req = await fetch("http://localhost:3000/api/users/login",{
            method:"POST",
            credentials:"include",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(rawData)
        }).then(res => res.json());
    } catch(error) {
        console.log('actions/loginUser.ts error');
    }
    if(req.user){
        redirect('/account');
    }
    return {
        message:"Something went wrong.Please try again"
    }
}