import { useState, useEffect } from "react";


const Users = () => {
    const [users, setUser] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUser(data.map((user: {name: string}) => user.name)))
        .catch(() => setError("Error fetchinf ussers"))
    }, [])
  return (
    <>
      <div>users</div>
      {error && <p> {error} </p>}

      <ul> { users.map(user => (<li key={user} > {user} </li>)) } </ul>
    </>
  )
}

export default Users