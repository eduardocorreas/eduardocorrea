import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulAsset.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      <div className="container mx-auto">
        <ol className="grid grid-cols-3 gap-3 mt-10">
          {posts.map(post => {
            const title = post.title 

            return (
              <li key={post.title }>
                <article
                  className="max-w-lg rounded overflow-hidden shadow-lg"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt="Mountain"
                  />
                  <div className="px-6 py-4">
                    <Link to={post.title } itemProp="url">
                      <div className="font-bold text-xl mb-2">{title}</div>
                    </Link>
                    <p
                      className="text-gray-700 text-base"
                      dangerouslySetInnerHTML={{
                        __html: post.description || post.excerpt,
                      }}
                      itemProp="description"
                    ></p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAsset {
      nodes {
        contentful_id
        title
        description
      }
    }
  }
`
