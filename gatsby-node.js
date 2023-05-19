const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for portfolio post
  const portfolioPost = path.resolve('./src/templates/portfolio-post.js')

  const result = await graphql(
    `
      {
        allContentfulPortfolioPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const portfolioPosts = result.data.allContentfulPortfolioPost.nodes

  if (portfolioPosts.length > 0) {
    portfolioPosts.forEach((post, index) => {
      const previousPostSlug =
        index === 0 ? null : portfolioPosts[index - 1].slug
      const nextPostSlug =
        index === portfolioPosts.length - 1
          ? null
          : portfolioPosts[index + 1].slug

      createPage({
        path: `/portfolio/${post.slug}/`,
        component: portfolioPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
