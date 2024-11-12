'use client';

import { useActionState } from "react";
import { loginUser } from "../actions/loginUser";

export default function Login(){
    
    const [state,formAction] = useActionState(loginUser,{ message: "" })    
    
    return(
        <form action={formAction}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />  
          </div>
          <div>
            <label htmlFor="email">Password:</label>
            <input type="password" id="password" name="password" required />  
          </div>
          <div>
            {state.message.length > 0 ? <p>{state.message}</p> : <></>}
          </div>
          <button type="submit">Login</button>  
        </form>
    )
}