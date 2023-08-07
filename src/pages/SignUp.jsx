import React from "react";


export default function SignUp() {

    const [formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value} = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        })
           .then(res => res.json())
           .then(data => console.log(data))
    }

    return (
        <div className="signup--container">
            <form 
            onSubmit={handleSubmit} className="signup--form form--styling">
                <label htmlFor="firstname">First name:</label>
                <input 
                     type="text" 
                     className="firstname" 
                     id="firstname"
                     name="firstname"
                     value={formData.firstname}
                     onChange={handleChange}
                     required
                />
                <label htmlFor="lastname">Last name:</label>
                <input 
                     type="text"  
                     className="lastname" 
                     id="lastname"
                     name="lastname"
                     value={formData.lastname}
                     onChange={handleChange}
                     required
                />
                <label htmlFor="phonenumber">Phone number:</label>
                <input 
                     type="text" 
                     className="phonenumber" 
                     id="phonenumber"
                     name="phonenumber"
                     value={formData.phonenumber}
                     onChange={handleChange}
                     required
                />
                <label htmlFor="email">Email:</label>
                <input 
                     type="email" 
                     className="email" 
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                />
                <label htmlFor="password">Password:</label>
                <input 
                     type="password" 
                     className="password" 
                     id="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     required
                />
                <button className="submit--btn">Submit</button>
            </form>
        </div>
    )
}