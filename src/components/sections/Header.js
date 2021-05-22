import React, { useState } from 'react'
import { Link } from 'gatsby'

import Hamburger from '../../images/icons/hamburger.svg'
import Close from '../../images/icons/close.svg'

export default function Header() {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header__colorbar"></div>
            <div className="header__content">
                <Link to="/">
                    <h1 className="header__logo">
                        Portugal<span className="header__upper">Travels</span>
                    </h1>
                </Link>
                <button className="navigation__open" onClick={handleClick}>
                    <Hamburger className="navigation__hamburger" />   
                </button>
                
                <nav className={`navigation ${isOpen ? "navigation--open" : ""}`}>
                    <button className="navigation__close" onClick={handleClick}>
                        <Close className="navigation__x" />
                    </button>
                    <Link className="navigation__link" to="/" activeClassName="navigation__link--active">Home</Link>
                    <Link className="navigation__link" to="/places" activeClassName="navigation__link--active">Sehenswertes</Link>
                    <Link className="navigation__link" to="/about" activeClassName="navigation__link--active">Über</Link>
                    <Link className="navigation__link" to="/posts" activeClassName="navigation__link--active">Blog</Link>
                </nav>                
            </div>
        </header>
    )
}