import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Facebook from '../images/icons/facebook.svg'
import Insta from '../images/icons/instagram.svg'
import Pinterest from '../images/icons/pinterest.svg'

export default function Posts() {

    const data = useStaticQuery(graphql`
      query Posts {
        allMarkdownRemark(sort: {fields: frontmatter___date}, limit: 3) {
          nodes {
            frontmatter {
              slug
              tags
              title
              author
              dateprint
              thumb {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    width: 500
                    placeholder: BLURRED
                  )
                }
              }
            }
            id
            excerpt(pruneLength: 200)
          }
        }
      }
    `)

    const posts = data.allMarkdownRemark.nodes
  
    return (
      <section className="posts">
      <div className="posts__content">
        <h2 className="posts__title">Letzte Blog Artikel</h2>
        <div className="posts__container">
          {posts.map(post => (
            <div className="postpre" key={post.id}>
              <GatsbyImage image={post.frontmatter.thumb.childImageSharp.gatsbyImageData} className="postpre__img" alt="" loading="eager" />
              <div className="postpre__content">
                <p className="postpre__tags">{post.frontmatter.tags}</p>  
                <h2 className="postpre__title">{post.frontmatter.title}</h2>
                <p className="postpre__text">
                  {post.excerpt}
                </p>
                <Link to={"/posts/" + post.frontmatter.slug} className="postpre__link">Weiterlesen</Link>
                <div className="postpre__footer">
                  <p className="postpre__by">Von <span className="postpre__orange">{post.frontmatter.author}</span> am {post.frontmatter.dateprint}</p>
                  <div className="postpre__share">
                    <Facebook className="postpre__icon"/>
                    <Pinterest className="postpre__icon"/>
                    <Insta className="postpre__icon"/>
                  </div>
                </div>                 
              </div>
            </div>
          ))}          
        </div>
        <button className="posts__button">Weitere Artikel</button>
      </div>
    </section>
    )
}