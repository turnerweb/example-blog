import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Share from '../components/Share'

export default function PostPreviewCard(props) {

    const classname = props.classname
    const post = props.content
    const frontmatter = post.frontmatter

    return (
      <div className={`postpre ${classname}`}>
        <GatsbyImage image={getImage(frontmatter.thumb.childImageSharp.gatsbyImageData)} className="postpre__img" alt="" loading="lazy" />
        <div className="postpre__content">
          <p className="postpre__tags">{frontmatter.tags}</p>  
          <h2 className="postpre__title">{frontmatter.title}</h2>
          <p className="postpre__text">
            {post.excerpt}
          </p>
          <Link to={"/posts/" + frontmatter.slug} className="postpre__link">Weiterlesen</Link>
          <div className="postpre__footer">
            <p className="postpre__by">Von <span className="postpre__orange">{frontmatter.author}</span> am {frontmatter.dateprint}</p>
            <Share class="postpre" />
          </div>                 
        </div>
      </div>
    )

}