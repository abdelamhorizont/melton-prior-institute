import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Section from '../../components/section/section'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import ArticleBody from '../../components/articleBody/articleBody'
import Article from '../../components/article/article'

export default function Pictorials() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "pictorials"}}}}}) {
        edges {
          node {
            id
            title
            date(formatString: "MMMM D, YYYY")
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name 
              }
            }
            excerpt
            uri
          }
        }
      }
    }
    `)

    const pictorials = data.allWpPost.edges

  return (
    <Layout>
        <ul>
        {
          pictorials.map(edge => (

            <Link to={`/content${edge.node.uri}`}>
              <li key={edge.node.id}>
                <Article path={edge.node} />
              </li>
            </Link>

          ))
        }
      </ul>

      {/* <ArticleTitle /> */}

    </Layout>
  )
}