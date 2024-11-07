import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Topic:CollectionConfig = {
    slug:'topic',
    access: {
        create: canCreate('topic'),
        read: canRead('topic'),
        update: canUpdate('topic'),
        delete: canDelete('topic'),
    },
    fields:[
        {
            name:'Topic Name',
            label:'Topic',
            type:'text'
        }
    ]
}