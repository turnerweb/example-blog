import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Share from '../components/Share'

export default function FullPost({ data }) {

    const { html } = data.markdownRemark
    const { title, dateprint, tags, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className="fullpost">
                <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} className="fullpost__img" alt="" loading="eager" />
                <div className="fullpost__content">
                    <div className="fullpost__infobar">
                        <p className="fullpost__published">Veröffentlicht am {dateprint}</p>
                        <Share class="fullpost" />
                    </div>
                    <h2 className="fullpost__title">{title}</h2>
                    <p className="fullpost__tags">{tags}</p>
                    <div className="fullpost__container">
                        <div dangerouslySetInnerHTML={{ __html: html }} className="fullpost__postcontent"></div>  
                    </div>
                                        
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query page($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            slug
            author
            dateprint
            title
            tags
            featuredImg {
            childImageSharp {
                gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: AUTO
                layout: CONSTRAINED
                )
            }
            }
        }
        }
    }
`