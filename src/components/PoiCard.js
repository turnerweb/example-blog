import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Share from './Share'


export default function PoiCard(props) {

    const point = props.content

    return (
        <div className="poicard">
            <GatsbyImage image={getImage(point.node.childMarkdownRemark.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="" loading="lazy" />
            <div className="poicard__container">
                <div className="poicard__text" dangerouslySetInnerHTML={{ __html: point.node.childMarkdownRemark.html }}></div>
                <div className="poicard__footer">
                    <a href={point.node.childMarkdownRemark.frontmatter.link} className="poicard__link" target="_blank" rel="noreferrer">Google Maps</a>
                    <Share class="poicard" />
                </div>
            </div>         
        </div>
    )
}