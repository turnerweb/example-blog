import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

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
                    formats: AUTO
                    layout: CONSTRAINED
                    width: 350
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
        {posts.map(post => (
          <div className="postpre" key={post.id}>
            <GatsbyImage image={post.frontmatter.thumb.childImageSharp.gatsbyImageData} className="postpre__img" alt="" loading="eager" />
            <p className="postpre__tags">{post.frontmatter.tags}</p>  
            <h2 className="postpre__title">{post.frontmatter.title}</h2>
            <p className="postpre__text">
              {post.excerpt}
            </p>
            <Link to={"/posts/" + post.frontmatter.slug}>Weiterlesen</Link>
            <div className="postpre__line"></div>
            <div className="postpre__footer">
              <p className="postpre__by">Von {post.frontmatter.author} am {post.frontmatter.dateprint}</p>
              <div className="postpre__share">
                <p>i</p><p>p</p><p>f</p>
              </div>
            </div>    
          </div>
        ))}
      </div>
    </section>
    )
}