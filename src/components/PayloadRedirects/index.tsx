import type React from "react";
import { notFound, redirect } from 'next/navigation';
import { getCachedRedirects } from "@/utils/getRedirects";

interface Props {
    disableNotFound?: boolean;
    url:string;
}

export async function PayloadRedirects({ disableNotFound,url }:Props){
    const slug = url.startsWith('/') ? url : `${url}`;
    
    const redirects = await getCachedRedirects()();

    const redirectItem = redirects.find((redirect) => redirect.from === slug);

    if(redirectItem){
        if(redirectItem.to?.url) {
            redirect(redirectItem.to.url)
        }
        let redirectUrl:string;
    
        if(typeof redirectItem.to?.reference?.value === 'string'){
            const collection = redirectItem.to?.reference.relationTo;
            const id = redirectItem.to.reference?.value;
            const document = (await getCachedDocument(collection,id))    
        }
    }
    
}
