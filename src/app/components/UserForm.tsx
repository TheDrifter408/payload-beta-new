'use client';

import { Access, Collection, Permissions, User } from "@/payload-types";

type TestCompProps = {
    collection:number | Collection | undefined,
    permissions:Permissions | undefined
}

function TestComp({ permissions,collection }:TestCompProps){
    
    return typeof collection !== 'number' ?
    (
        <li>
            Name:{collection?.collectionName}
            <br />
            <span style={{
                color: permissions?.create ? 'green' : 'red'
            }}>Create:{permissions?.create ? 'true' : 'false'}</span>
            <br />
            <span style={{
                color: permissions?.read ? 'green' : 'red'
            }}>Read:{permissions?.read ? 'true' : 'false'}</span>
            <br />
            <span style={{
                color: permissions?.update ? 'green' : 'red'
            }}>Update:{permissions?.update ? 'true' : 'false'}</span>
            <br />
            <span style={{
                color: permissions?.delete ? 'green' : 'red'
            }}>Delete:{permissions?.delete ? 'true' : 'false'}</span>
            <br />
        </li>
    ) : 
    (
        <span>Data Wrong</span>
    )
}

export default function UserForm(props:User){
    return (
        <div>
            <p>Name:{props.name}</p>
            {
                typeof props.role?.value !== 'number' ? 
                <ul>
                    {
                        typeof props.role?.value.accessTo !== 'number' ? 
                        props.role?.value?.accessTo?.map((access) => (
                            <TestComp key={access.id} collection={access.collection?.value} permissions={access.permissions} />
                        )) :
                        <div>
                            Something went wrong rendering List
                        </div>
                    }
                </ul> :
                <div>
                    Something went wrong props.value is a number
                </div>
            }
            
        </div>
    )
}