import { canCreate, canDelete, canRead, canUpdate } from '@/access/DynamicAccess'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: canCreate("Admin"),
    read: canRead("Admin"),
    update: canUpdate("Admin"),
    delete: canDelete("Admin")
    // create: () => true,
    // read: () => true,
    // update: () => true,
    // delete: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies:{
      sameSite:"None",
      secure : true,
    },
  },
  fields: [
    {
      name:'name',
      type:'text',
    },
    {
      name:'role',
      type:'relationship',
      relationTo:['role'],
      saveToJWT:true,
    },
  ],
}