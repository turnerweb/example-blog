import { Link,graphql } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Home({ data }) {

  const posts = data.allMarkdownRemark.nodes
  console.log(data)

  return (
      <Layout>
        <Hero />
        <section className="posts">
          <div className="posts__content">
            {posts.map(post => (
              <div className="postpre" key={post.id}>
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
      </Layout>
    )
}

export const query = graphql`
  query Posts {
    allMarkdownRemark(sort: {fields: frontmatter___date}, limit: 3) {
      nodes {
        frontmatter {
          slug
          tags
          title
          author
          dateprint
        }
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`