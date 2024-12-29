//only the page file is accesible via the url
import React from 'react'

interface User {
    id: number;
    name: string;
}
//fetch data in a server side componenet whenever possible
const UserPage = async () => {
    //fetch stores in data cashe
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {next: {revalidate: 10}} //next will only store data in cache for 10 seconds then get fresh data every 10 seconds
    //since we are caching and not getting data constantly this componenet will be 'static' it will only be rendered once when run
    //if we do not cache we have dynaic rendering and we will fetch data constantly
    );
    const users: User[] = await res.json()
  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UserPage