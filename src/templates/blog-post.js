import React from "react"
import { graphql } from "gatsby"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.blogpost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <article>
        <header>
          <h1>
            {post.title}
          </h1>
        </header>
        {post.headerImage && post.headerImage[0] && (
          <img
            src={`${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${post.headerImage[0].id}.${post.headerImage[0].extension}`}
            alt="test"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    )
  }
}
export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    blogpost(slug: { eq: $slug }) {
      id
      title
      content
      headerImage {
        extension
        id
      }
    }
  }
`