import React from "react";


export default function Login() {

    const [formData, setFormData] = React.useState({
        email : '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="login--container">
            <form onSubmit={handleSubmit}  className="form--styling">
                <label htmlFor="email">Email:</label>
                <input 
                     type="email" 
                     name="email" 
                     id="email" 
                     value={formData.email}
                     onChange={handleChange}
                     required
                />
                <label htmlFor="password">Password:</label>
                <input 
                     type="password" 
                     name="password" 
                     id="password" 
                     value={formData.password}
                     onChange={handleChange}
                     required
                />
                <button className="submit--btn">Submit</button>
            </form>
        </div>
    )
}