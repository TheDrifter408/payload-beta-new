# HTTP Cookie issue
Using Payload beta:
```javascript
"dependencies": {
    "@payloadcms/next": "beta",
    "@payloadcms/payload-cloud": "beta",
    "@payloadcms/richtext-lexical": "beta",
    "cross-env": "^7.0.3",
    "graphql": "^16.8.1",
    "next": "15.0.0",
    "payload": "beta",
    "react": "19.0.0-rc-65a56d0e-20241020",
    "react-dom": "19.0.0-rc-65a56d0e-20241020",
    "sharp": "0.32.6",
    "@payloadcms/db-postgres": "beta"
  },
  "devDependencies": {
    "@types/node": "^22.5.4",
    "@types/react": "npm:types-react@19.0.0-rc.1",
    "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1",
    "eslint": "^8",
    "eslint-config-next": "15.0.0",
    "typescript": "5.6.3"
  },
```
When logging from the /login page, the response is as expected, I get an object containing the `token`, `user` etc.
When from the /account page, a fetch request is done,
```javascript
const req = await fetch("http://localhost:3000/api/users/me",{
        method:"GET",
        credentials:"same-origin",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json());
    console.log("Account Page:",req);
```
The returns returns `{ user:null,message:"Account" }`. 

## Things I have tried:
1. Checked if the cookie does get set in the browser, it does.
2. Set CORS and CSRF to an array containing "http://localhost:3000/"
3. Set the options on auth.cookies in the Users CollectionConfig file to be, 
```javascript
    { ...
        sameSite:"None",
        secure:true
    }
```
