import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Share from './Share'


export default function PoiCard(props) {

    const point = props.content

    return (
        <div className="poicard__single" key={point.node.id}>
            <div className="poicard__img">
                <GatsbyImage image={point.node.childMarkdownRemark.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="" loading="eager" />
                <div className="poicard__overlay">
                    <div className="poicard__text" dangerouslySetInnerHTML={{ __html: point.node.childMarkdownRemark.html }}></div>
                    <div className="poicard__footer">
                        <Share class="poicard" />
                        <a href={point.node.childMarkdownRemark.frontmatter.link} className="poicard__link" target="_blank" rel="noreferrer, noopener">Google Maps</a>
                    </div>
                </div>
            </div>         
        </div>
    )
}