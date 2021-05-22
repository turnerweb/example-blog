import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import PostPreviewCard from '../PostPreviewCard'

export default function PostsPreview() {

    const data = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/posts/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              tags
              title
              author
              dateprint
              thumb {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP]
                  )
                }
              }
              date
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
    `)

    const posts = data.allMarkdownRemark.edges
  
    return (
      <section className="posts">
      <div className="posts__content">
        <h2 className="posts__title">Letzte Blog Artikel</h2>
        <div className="posts__container">
          {posts.map(post => (
            <PostPreviewCard content={post.node} classname="posts__card" key={post.node.id} />
          ))}          
        </div>
        <Link className="posts__button" to="/posts">Weitere Artikel</Link>
      </div>
    </section>
    )
}