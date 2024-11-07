import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '@payload-config';
import printUser from "@/utils/printUser";
import Link from "next/link";
import UserForm from "./components/UserForm";

export default async function Home(){
    {/*Using the LocalAPI in payload*/}
    const payload = await getPayloadHMR({
        config
    });
    const users = await payload.findByID({
        collection: 'users',
        id: 2
    });
    return(
        <section>
            <div>Hello {users ? users.name :  'Anonymous'}</div>
            <Link href="/admin">Log In</Link>
            <article>
                <h3>Users:</h3>
                <UserForm {...users} />
            </article>
        </section>
    )
}