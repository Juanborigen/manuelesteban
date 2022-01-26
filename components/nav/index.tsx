
import React from 'react';
//Constants
import { NAV_LINKS } from './constants';

const Nav = () => {
    return(
        <nav>
            <ul className='flex bg-black text-white'>
                {
                    NAV_LINKS.map((link, index)=> {
                        return <li key={index} className='m-2'><a href={link.linkTo}>{link.label}</a></li>
                    })
                }
            </ul>
        </nav>
    )
};

export default Nav;