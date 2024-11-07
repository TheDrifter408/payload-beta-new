import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Author:CollectionConfig = {
    slug:'author',
    access: {
        create:canCreate('author'),
        read:canRead('author'),
        update:canUpdate('author'),
        delete:canDelete('author'),
    },
    admin:{
        useAsTitle:'name'
    },
    fields:[
        {
            name:'name',
            type:'text',
        },
        {
            name:'role',
            type:'relationship',
            relationTo:'role'
        }
    ]
}