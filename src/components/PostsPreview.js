import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PostPreviewCard from '../components/PostPreviewCard'

export default function Posts() {

    const data = useStaticQuery(graphql`
    query Posts {
      allFile(
        filter: {sourceInstanceName: {eq: "posts"}}
        limit: 3
        sort: {fields: childMarkdownRemark___frontmatter___date}
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
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
                      formats: AUTO
                    )
                  }
                }
              }
              excerpt(pruneLength: 200)
            }
          }
        }
      }
    }
    `)

    const posts = data.allFile.edges
  
    return (
      <section className="posts">
      <div className="posts__content">
        <h2 className="posts__title">Letzte Blog Artikel</h2>
        <div className="posts__container">
          {posts.map(post => (
            <PostPreviewCard content={post.node} />
          ))}          
        </div>
        <button className="posts__button">Weitere Artikel</button>
      </div>
    </section>
    )
}