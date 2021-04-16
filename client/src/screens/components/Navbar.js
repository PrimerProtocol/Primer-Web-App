import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            <Link to='/' className='navbar-brand'>Primer</Link>
            <ul className='navbar-ul'>
                <li>
                    <Link to='/' className='navbar-link'>Market</Link>
                </li>
                <li>
                    <Link to='/profile' className='navbar-link'>Profile</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar