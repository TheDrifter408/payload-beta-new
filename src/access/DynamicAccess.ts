import { User } from "@/payload-types"
import { Access } from "payload"
import { isAdmin } from "./isAdmin";

//This function returns a boolean based on conditions applied

export const canCreate = (collectionSlug:string):Access<User> => ({ req: { user }  }) => {
    if(user && typeof user?.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            //get the user's collections
            let collections = user.role?.value.accessTo?.map((access) => {
                if(typeof access.collection?.value !== 'number'){
                    return {
                        name: access.collection?.value.collectionName,
                        permission: access.permissions
                    }
                }
            })
            //collections?.filter() method will return only the object containing the collection's access
            let giveAccess = collections?.filter((access) => access?.name === collectionSlug);
            if(giveAccess && giveAccess[0]?.permission?.create === true){
                return true;
            } else {
                return false;
            }
        }
    }   
    return false;
}

export const canRead = (collectionSlug:string):Access<User> => ({ req: { user } }) => {
    if(user && typeof user?.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            //get the user's collections
            let collections = user.role?.value.accessTo?.map((access) => {
                if(typeof access.collection?.value !== 'number'){
                    return {
                        name: access.collection?.value.collectionName,
                        permission: access.permissions
                    }
                }
            })
            //collections?.filter() method will return only the object containing the collection's access
            let giveAccess = collections?.filter((access) => access?.name === collectionSlug);
            if(giveAccess && giveAccess[0]?.permission?.read === true){
                return true;
            } else {
                return false;
            }
        }
    }   
    return false;

}

export const canUpdate = (collectionSlug:string):Access<User> => ({ req: { user } }) => {
    if(user && typeof user?.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            //get the user's collections
            let collections = user.role?.value.accessTo?.map((access) => {
                if(typeof access.collection?.value !== 'number'){
                    return {
                        name: access.collection?.value.collectionName,
                        permission: access.permissions
                    }
                }
            })
            //collections?.filter() method will return only the object containing the collection's access
            let giveAccess = collections?.filter((access) => access?.name === collectionSlug);
            if(giveAccess && giveAccess[0]?.permission?.update === true){
                return true;
            } else {
                return false;
            }
        }
    }   
    return false;

}

export const canDelete = (collectionSlug:string):Access<User> => ({ req: { user } }) => {
    if(user && typeof user?.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            //get the user's collections
            let collections = user.role?.value.accessTo?.map((access) => {
                if(typeof access.collection?.value !== 'number'){
                    return {
                        name: access.collection?.value.collectionName,
                        permission: access.permissions
                    }
                }
            })
            //collections?.filter() method will return only the object containing the collection's access
            let giveAccess = collections?.filter((access) => access?.name === collectionSlug);
            if(giveAccess && giveAccess[0]?.permission?.delete === true){
                return true;
            } else {
                return false;
            }
        }
    }   
    return false;

}