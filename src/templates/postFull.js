import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function FullPost({ data }) {

    const { html } = data.markdownRemark
    const { title, author, dateprint, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div>
                <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="" loading="eager" />
                <h2>{title}</h2>
                <p>{author} {dateprint}</p>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
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