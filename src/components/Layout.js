import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import '../styles/main.scss'


export default function Layout({ children }) {

const data = useStaticQuery(graphql`
    query Seo {
        site {
        siteMetadata {
            title
            description
            robots
            lang
        }
        }
    }
`)

const meta = data.site.siteMetadata

    return (
        
        <div className="layout">
            <Helmet>
                <html lang={ meta.lang } />
                <title>{ meta.title }</title>
                <meta name="description" content={ meta.description } />
                <meta name="robots" content={ meta.robots } />
            </Helmet>
            <Header />
            <main>
                { children }    
            </main>
            <Footer />
        </div>
    )
}