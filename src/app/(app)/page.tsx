import configPromise from '@payload-config';

import Link from "next/link";
import { PaginatedDocs } from "payload";
import { Access, User } from "@/payload-types";
import { getPayloadHMR } from '@payloadcms/next/utilities';

function TestComponent({id,name,role }:User){
    return(
        <div>
            <h1>Name: {name}</h1>
            <h2>Role: {role?.relationTo}</h2>
            {
                typeof role?.value !== 'number' ? 
                <ul>
                    {
                        role?.value.accessTo ? 
                        role.value.accessTo.map((access) => (
                            <li key={access.id}>
                                <p>Collection: { typeof access.collection?.value !== 'number' ? access.collection?.value?.collectionName : ''}</p>
                                <p>Permission: </p>
                                <div>
                                    <p>Create: {access.permissions?.create ? 'True' : 'False'}</p>
                                </div>
                                <div>
                                    <p>Read: {access.permissions?.read ? 'True' : 'False'}</p>
                                </div>
                                <div>
                                    <p>Update: {access.permissions?.update ? 'True' : 'False'}</p>
                                </div>
                                <div>
                                    <p>Delete: {access.permissions?.delete ? 'True' : 'False'}</p>
                                </div>
                            </li>
                        )) : <p>role.value.accessTo error</p>
                    }
                </ul> : <p>role.value error</p>
            }
        </div>
    )
}

export default async function Home(){
    const payload = await getPayloadHMR({ config:configPromise })
    const result:PaginatedDocs<User> = await payload.find({
        collection:'users',
        depth:2
    })
    console.dir(result.docs[0],{ depth: null });
    return(
        <section>
            <div>
                <h2>Login Page</h2>
                <Link href="/login">Login</Link>
            </div>
            <TestComponent {...result.docs[0]} />
        </section>
    )
}