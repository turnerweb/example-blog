import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                {new Date().getFullYear()} <a href="https://www.stefanturner.ch">stefanturner.ch</a>
            </p>
        </footer>
    )
}