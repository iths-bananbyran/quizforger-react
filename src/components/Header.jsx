import React from 'react';
import { NavLink } from 'react-router-dom';
const header = ()=>{
    return (
        <header>
            <nav>
                <ul>
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