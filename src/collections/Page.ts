import { CollectionConfig } from "payload";

export const Page:CollectionConfig = {
    slug:'page',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    admin:{
        defaultColumns:['title','slug','updatedAt'],
        useAsTitle:'title',
    },
    fields:[
        {
            name:"title",
            type:"text",
            required:true,
        },
        {
            name:'content',
            type:'richText',
        }
    ]
}