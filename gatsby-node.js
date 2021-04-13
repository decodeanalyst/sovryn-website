const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/article.jsx")
  const categoryTemplate = path.resolve("src/templates/category.jsx")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
      categoryGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
        path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    })
  })

  // Extract category data from query
  const category = result.data.categoryGroup.group

  // Make category pages
  category.forEach(category => {
    createPage({
      path: `/blog/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}