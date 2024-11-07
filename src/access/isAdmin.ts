import { User } from "@/payload-types";
 
export const isAdmin = (user:User) => {
    if(user && typeof user.role?.value !== 'number' && typeof user.role?.value !== 'number'){
        if(user.role?.value.role === 'Admin'){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}