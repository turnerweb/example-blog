const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query Pages {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
                nodes {
                  frontmatter {
                    slug
                  }
                }
            }
        }    
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/posts/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/postFull.js'),
            context: { slug: node.frontmatter.slug }
        })
    })

}