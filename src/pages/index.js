import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import ArticleTitle from '../components/articleTitle/articleTitle'
import ArticleBody from '../components/articleBody/articleBody'

// import './index.module.scss'

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "features"}}}}}
        limit: 3
      ) {        
        edges {
          node {
            id
            categories {
              nodes {
                name 
              }
            }
            title
            date(formatString: "MMMM D, YYYY")
            author {
              node {
                name
              }
            }
            uri
          }
        }
      }
    }
    `)

  return (
    <Layout>

      <Section title="About">
        <ArticleBody />
      </Section>

      <Section title="News">
        <ArticleTitle />
        <ArticleBody />
      </Section>

      <Section title="Showcase">
        <ArticleTitle />
        <ArticleBody />
      </Section>

      <Section title="features">
      <ul>
        {
          data.allWpPost.edges.map(edge => (

            <Link to={`/content${edge.node.uri}`}>
              <li >                
                <ArticleTitle path={edge.node} />
              </li>
            </Link>

          ))
        }
      </ul>
      </Section>

    </Layout>
  )
}

export default Homepage
