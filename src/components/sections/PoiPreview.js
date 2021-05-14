import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PoiCard from '../PoiCard'


export default function PoiPreview() {

  const data = useStaticQuery(graphql`
    query Points {
        allFile(filter: {sourceInstanceName: {eq: "pois"}}, limit: 4) {
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
        <section className="poi">
            <div className="poi__content">
                <h2 className="poi__title">Sehenswürdigkeiten</h2>
                <div className="poi__grid">
                    {points.map(point => (
                        <PoiCard content={point} />
                    ))}
                </div>
                <button className="poi__button">Weitere Orte</button>
            </div>
        </section>
    )
}