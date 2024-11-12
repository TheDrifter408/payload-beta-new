export default async function Account(){
    const req = await fetch("http://localhost:3000/api/users/me",{
        method:"GET",
        credentials:"same-origin",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json());
    console.log("Account Page:",req);
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )   
}