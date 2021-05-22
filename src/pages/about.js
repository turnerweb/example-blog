import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import PostsPreview from '../components/sections/PostsPreview'

export default function About() {

    const data = useStaticQuery(graphql`
        query About {
            file(sourceInstanceName: {eq: "markdown"}) {
            childMarkdownRemark {
                frontmatter {
                img {
                    childImageSharp {
                    gatsbyImageData(
                        width: 1000
                        placeholder: BLURRED
                        layout: CONSTRAINED
                        formats: [AUTO, WEBP]
                    )
                    }
                }
                intro
                title
                }
                html
            }
            }
        }
    `)

    const about = data.file.childMarkdownRemark

    return (
        <Layout>
            <div className="about">
                <PageTitle title={about.frontmatter.title} className="about__title" />  
                <GatsbyImage image={getImage(about.frontmatter.img.childImageSharp.gatsbyImageData)} alt="" className="about__img" loading="lazy" />
                <div className="about__textcontainer">
                    <p className="about__intro">{about.frontmatter.intro}</p>
                    <div className="about__paras" dangerouslySetInnerHTML={{ __html: about.html }}></div>
                </div>
            </div>
            <PostsPreview />
        </Layout>
    )
}