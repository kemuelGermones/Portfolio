import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import classes from './Navbar.module.css';
import Button from './Button';

const menu = [
    {
        link: '#',
        name: 'About'
    },
    {
        link: '#',
        name: 'Projects'
    },
    {
        link: '#',
        name: 'Contact'
    },
    {
        link: '#',
        name: 'Resume'
    }
];

function NavBar() {
    const [showSidebar, setSidebar] = useState(false);

    function sidebarHandler() {
        setSidebar(state => !state);
    }

    return (
        <nav className={classes.navbar}>
            <h1>KG.</h1>
            <div
                className={classes.mobileicon}
                onClick={sidebarHandler}>
                {!showSidebar ? <BiMenu size='2em'/> : <MdClose size='2em'/> }
            </div>
            <ul style={{ right: showSidebar ? '0' : null }}>
                { menu.map((item, index) => {
                    if ((menu.length - 1) === index) {
                        return (
                            <li key={index}>
                                <Button>
                                    {item.name}
                                </Button>
                            </li>
                        );
                    }
                    return (
                        <li key={index}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    );
                }) }
            </ul>
        </nav>
    );
}

export default NavBar;