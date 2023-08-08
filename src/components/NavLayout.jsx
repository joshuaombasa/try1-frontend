import React from "react";
import { Link, Outlet } from 'react-router-dom'
export default function NavLayout() {
    return (
        <div className="nav--container">
            <header>
                <Link to="/" className="logo">lotrip</Link>
                <nav>
                    <Link to="signup">Sign up</Link>
                    <Link to="login">Login</Link>
                    <Link to="admin">Admin</Link>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}