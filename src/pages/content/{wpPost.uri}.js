import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import ArticleTitle from '../../components/articleTitle/articleTitle'

export default function Post({ data }) {

  return (
    <Layout>

      <ArticleTitle path={data.wpPost} />
      <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpPost(id: {eq: $id}) {
    id
    categories {
      nodes {
        name 
      }
    }
    title
    content
    date(formatString: "MMMM D, YYYY")
    author {
      node {
        name
      }
    }
    excerpt
    slug
  }
}
`