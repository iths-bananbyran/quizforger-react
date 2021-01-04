import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Header.scss';

const header = ()=>{
    return (
        <header>
            <nav className='qf-main-nav'>
                <ul className='qf-nav-ul'>
                    <NavLink to='/'>
                        <li>Hem</li>
                    </NavLink>
                    <NavLink to='/alla-quiz'>
                        <li>Alla quiz</li>
                    </NavLink>
                    <NavLink to='/om-oss'>
                        <li>Om oss</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export default header;