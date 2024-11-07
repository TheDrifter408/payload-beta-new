import { User } from "@/payload-types";
import { PaginatedDocs } from "payload";

export default function printUser({ docs }:PaginatedDocs<User>){
    //User Name
    let roles = docs.map((user) => {
        if(typeof user?.role?.value !== 'number'){
            return {
                name:user.name,
                access: user.role?.value.accessTo?.map((access) => {
                    if(typeof access.collection?.value !== 'number'){
                        return {
                            collection:access.collection?.value?.collectionName,
                            permission:access.permissions
                        }
                    }
                })
            };
        }
    });
    console.log('User Attributes:');
    console.dir(roles,{ depth:null });
}