import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout';
import PostPreviewCard from '../../components/PostPreviewCard'
import PageTitle from '../../components/PageTitle'

export default function Posts() {

        const data = useStaticQuery(graphql`
        query AllPosts {
          allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/posts/"}}
            sort: {fields: frontmatter___date, order: DESC}
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
                        formats: AUTO
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

    const allPosts = data.allMarkdownRemark.edges


    return (
        <Layout>
          <div className="allposts">
            <PageTitle title="Blog Artikel" />
            <div className="allposts__container">
              <div className="allposts__content">
                {allPosts.map(singlePost => (
                  <PostPreviewCard content={singlePost.node} classname="allposts__card" key={singlePost.node.id} />
                ))}
              </div>
            </div>
          </div>
        </Layout>
    )
}