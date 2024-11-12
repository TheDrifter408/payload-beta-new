export async function currentUser(){
    let req = null;
    try {
        req = await fetch('http://localhost:3000/api/users/me',{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
        console.log(req);
    } catch (err){
        console.error('Error Getting Current user');
    }
    return req;
}