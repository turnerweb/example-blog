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
                    <h1 className="hero__title">Interessante Orte in Portugal</h1>
                    <GatsbyImage image={getImage(data.file)} className="hero__img" alt="" loading="eager" />
                    <p className="hero__text">
                        Arcu et adipiscing et lacus. Diam arcu cursus a pulvinar lacinia non elit id. Sed fames id amet metus nisl lacus a tincidunt.
                    </p>
                </div>  
        </section> 
        )    
    }

export default Hero


