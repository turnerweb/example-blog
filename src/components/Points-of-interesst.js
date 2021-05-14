import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Share from '../components/Share'


export default function Points() {

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
                        
                        <div className="poi__single" key={point.node.id}>
                            <div className="poi__img">
                                <GatsbyImage image={point.node.childMarkdownRemark.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="" loading="eager" />
                                <div className="poi__overlay">
                                    <div className="poi__text" dangerouslySetInnerHTML={{ __html: point.node.childMarkdownRemark.html }}></div>
                                    <div className="poi__footer">
                                        <Share class="poi" />
                                        <a href={point.node.childMarkdownRemark.frontmatter.link} className="poi__link" target="_blank" rel="noreferrer, noopener">Google Maps</a>
                                    </div>
                                </div>
                            </div>         
                        </div>
                    ))}
                </div>
                <button className="poi__button">Weitere Orte</button>
            </div>
        </section>
    )
}