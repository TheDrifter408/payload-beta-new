import { CollectionConfig } from "payload";

export const Collections:CollectionConfig = {
    slug:'collections',
    access: {
        create:() => true,
        read:() => true,
        update:() => true,
        delete:() => true
    },
    admin:{
        useAsTitle:'collectionName'
    },
    fields:[
        {
            name:'collectionName',
            label:'Collection Title',
            type:'text',
        },
    ]
}