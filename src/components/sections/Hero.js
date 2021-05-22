import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


    const Hero = () => {
        const data = useStaticQuery(graphql`
            query Hero {
                file(relativePath: {eq: "hero.jpg"}) {
                childImageSharp {
                    gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    width: 1200
                    placeholder: BLURRED
                    )
                }
                }
            }
        `)

        return (
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">Sehenswerte & interessante Orte in Portugal</h1>
                    <GatsbyImage image={getImage(data.file)} className="hero__img" alt="" loading="lazy" />
                    <p className="hero__text">
                        Alle Artikel auf dieser Seite sind Dummytexte. Die Website wurde mit Gatsby entwickelt.
                        Verwaltet wird der Content mit Forestry CMS.
                    </p>
                </div>  
        </section> 
        )    
    }

export default Hero


