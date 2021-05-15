import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

import Info from '../Information-single'

export default function Infos() {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(relativePath: {eq: "infos-bg.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1200, 
                            placeholder: BLURRED, 
                            formats: [AUTO, WEBP])
              }
            }
          }
        `
    )

    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    return (
        <BackgroundImage
            Tag="section"
            className="infos"
            {...bgImage}
            preserveStackingContext
        >
            <div className="infos__darkbg"></div>
            <div className="infos__content">
                <h2 className="infos__title">Infos & Fakten</h2>
                <div className="infos__grid">
                    <Info title="Hauptstadt" text="Lissabon" />
                    <Info title="Zeitzone" text="MEZ" />
                    <Info title="Währung" text="Euro (€)" />
                    <Info title="Netzspannung" text="230V" />
                    <Info title="Küstenlinie" text="1'793 km" />             
                    <Info title="Fläche" text="92'212 km2" />
                    <Info title="Bevölkerung" text="10.28Mil (2019)" />
                    <Info title="Flughafen" text="LIS, OPO, FAO" />
                </div>
            </div>

        </BackgroundImage>
    )
}