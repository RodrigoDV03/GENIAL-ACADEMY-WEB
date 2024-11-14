import React from 'react'
import './NavBar.css'

const NavBar = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="navBar-container">
        <div className="user-welcome">
            <h1>Bienvenido {username} </h1>
            <div className="user-background">
                <img src="/src/assets/images/userMenu.png" alt="User" />
            </div>
        </div>
    </div>
  )
}

export default NavBar
