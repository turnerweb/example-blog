import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle'
import PoiCard from '../../components/PoiCard'

export default function Places() {

    const data = useStaticQuery(graphql`
        query AllPoints {
            allFile(filter: {sourceInstanceName: {eq: "pois"}}) {
            edges {
                node {
                id
                childMarkdownRemark {
                    frontmatter {
                    tag
                    link
                    thumb {
                        childImageSharp {
                        gatsbyImageData(
                            width: 680
                            layout: CONSTRAINED
                            formats: [AUTO, WEBP] 
                            placeholder: BLURRED
                            )
                        }
                    }
                    }
                    html
                }
                }
            }
            }
        }
  `)

  const points = data.allFile.edges

    return (
        <Layout>
            <div className="allpoints">
                <PageTitle title='Sehenswertes' />
                <div className="allpoints__grid">
                    {points.map(point => (
                        <PoiCard content={point} key={point.node.id} />
                    ))}
                </div>              
            </div>
        </Layout>
    )
}