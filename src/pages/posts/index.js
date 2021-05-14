import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout';
import PostPreviewCard from '../../components/PostPreviewCard'
import PageTitle from '../../components/Page-title'

export default function Posts() {

        const data = useStaticQuery(graphql`
        query AllPosts {
          allFile(
            filter: {sourceInstanceName: {eq: "posts"}}
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

    const allPosts = data.allFile.edges


    return (
        <Layout>
          <div className="allposts">
            <PageTitle title="Blog Artikel" />
            <div className="allposts__container">
              <div className="allposts__content">
                {allPosts.map(singlePost => (
                  <PostPreviewCard content={singlePost.node} className="allposts__card" />
                ))}
              </div>
            </div>
          </div>
        </Layout>
    )
}