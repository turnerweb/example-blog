import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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