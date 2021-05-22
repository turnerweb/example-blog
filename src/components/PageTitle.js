import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function PageTitle(props) {

    const data = useStaticQuery(graphql`
    query PageTitle {
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

    const title = props.title

    return (
        <div className="pagetitle">
            <h1 className="pagetitle__title">{title}</h1>
            <GatsbyImage image={getImage(data.file)} className="pagetitle__img" alt="" loading="lazy" />            
        </div>
    )
}