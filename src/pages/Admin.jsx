import React from "react";

export default function Admin() {

    const [adminData, setAdminData] = React.useState(null)

    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('token'))

    React.useEffect(() => {
        fetch('http://localhost:5000/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAdminData(data.user)
        })
    }, [isLoggedIn])

   

    function handleLogout() {
        localStorage.removeItem('token')
        setIsLoggedIn(null)
    }

    return (
        <div className="admin--container">
            {
                adminData ? <h1>Welcome {adminData.first_name} {adminData.last_name} </h1> :  <h1>Loading...</h1>
            }
            {adminData && <button className="logout--btn" onClick={handleLogout}>Logout</button>}
        </div>
    )
}