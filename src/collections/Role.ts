import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

//Dynamic Roles that the Admin can create

export const Role:CollectionConfig = {
    slug:'role',
    access: {
        create: canCreate("Admin"),
        read: canRead("Admin"),
        update: canUpdate("Admin"),
        delete: canDelete("Admin")
        /* create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true, */
    },
    admin:{
        useAsTitle:'role'
    },
    fields:[
        {
            name:'role',
            label:'Role',
            type:'text'
        },
        {
            name:'accessTo',
            type:'array',
            label:'Access To',
            interfaceName:"Access",
            minRows:0,
            maxRows:6,
            fields:[
                {
                    name:'collection',
                    type:'relationship',
                    relationTo:['collections'],
                    saveToJWT:true,
                },
                {
                    name:"permissions",
                    type:'group',
                    interfaceName:"Permissions",
                    fields:[
                        {
                            name:'create',
                            type:'checkbox',
                            defaultValue:false,
                        },
                        {
                            name:'read',
                            type:'checkbox',
                            defaultValue:false,
                        },
                        {
                            name:'update',
                            type:'checkbox',
                            defaultValue:false,
                        },
                        {
                            name:'delete',
                            type:'checkbox',
                            defaultValue:false,
                        },
                    ]
                }
            ]
        }        
    ]
    
}