import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Section from '../../components/section/section'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import ArticleBody from '../../components/articleBody/articleBody'

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

  return (
    <Layout>
      <ul>
        {
          data.allWpPost.edges.map(edge => (

            <Link to={`/content${edge.node.uri}`}>
              <li key={edge.node.id}>
                <p>{edge.node.author.node.name}</p>
                <p>{edge.node.date}</p>
                <p>{edge.node.categories.nodes[0].name}</p>
                <h1>{edge.node.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
              </li>
            </Link>

          ))
        }
      </ul>

      {/* <ArticleTitle /> */}

    </Layout>
  )
}