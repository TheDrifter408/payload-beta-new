import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Article:CollectionConfig = {
    slug:'article',
    access: {
        create:canCreate('article'),
        read:canRead('article'),
        update:canUpdate('article'),
        delete:canDelete('article'),
        /* create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true, */
    },
    admin:{
        useAsTitle:'title'
    },
    fields:[
        {
            name:'title',
            type:'text',
        },
        {
            name:'body',
            type:'text',
        },
        {
            name:'author',
            type:'relationship',
            relationTo:'author'
        },
        {
            name:'comments',
            type:'relationship',
            relationTo:['comment'],
            hasMany:true,
        },
        {
            name:'createdBy',
            label:'Created By',
            type:'relationship',
            relationTo:'users',
            access:{
                create: () => false,
                update: () => false,
                read: () => true,
            }
        }
    ],
    hooks: {
        beforeChange:[
            ({req,operation,data}) => {
                if(operation === 'create'){
                    if(req.user){
                        data.createdBy = req.user.id;
                        return data;
                    }
                }
            }
        ]
    }
}