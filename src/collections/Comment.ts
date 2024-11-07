import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Comment:CollectionConfig = {
    slug:'comment',
    access:{
        create:canCreate('comment'),
        read:canRead('comment'),
        update:canUpdate('comment'),
        delete:canDelete('comment'),
        /* create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true, */
    },
    admin: {
        useAsTitle:'title'
    },
    fields:[
        {
            name:'title',
            type:'text'
        },
        {
            name:'body',
            type:'text',
        },
        {
            name:'commenter',
            label:'Commented By',
            type:'text',
            access : {
                create: () => false,
                read: () => true,
                update: () => false,
            }
        },
    ],
    hooks: {
        beforeChange: [
            ({ req,operation,data }) => {
                if(operation === 'create'){
                    if(req.user){
                        data.commenter = req.user.email;
                        return data;
                    }
                }
            }
        ] 
    }
}