import React, { useState } from 'react'
import { Link } from 'gatsby'

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
                    <img src="/hamburger.svg" className="navigation__hamburger"  alt="" />    
                </button>
                
                <nav className={`navigation ${isOpen ? "navigation--open" : ""}`}>
                    <button className="navigation__close">
                        <img src="/close.svg" className="navigation__x" onClick={handleClick} alt="" />
                    </button>
                    <Link className="navigation__link" to="/">Home</Link>
                    <Link className="navigation__link" to="/places">Sehenswürdigkeiten</Link>
                    <Link className="navigation__link" to="/about">Über mich</Link>
                    <Link className="navigation__link" to="/posts">Blog</Link>
                </nav>                
            </div>
        </header>
    )
}