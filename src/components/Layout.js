import React from 'react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import '../styles/main.scss'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main>
                { children }    
            </main>
            <Footer />
        </div>
    )
}