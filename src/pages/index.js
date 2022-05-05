import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import ArticleTitle from '../components/articleTitle/articleTitle'
import ArticleBody from '../components/articleBody/articleBody'

import "../styles/reset.scss";
import "../styles/global.scss";
import {
  categories_lists
} from './index.module.scss'

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost{        
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

      <Section title="Showcase">
        <ArticleTitle />
        <ArticleBody />
      </Section>

      <div className={categories_lists}>
      <Section title="features">
        <ul>
          {
            data.allWpPost.edges.filter(edge => (
              edge.node.categories.nodes[0] &&
              edge.node.categories.nodes[0].name === "features"
            )).slice(0, 3).map(edge => (

              <Link to={`/content${edge.node.uri}`}>
                <li >
                  <ArticleTitle path={edge.node} />
                </li>
              </Link>

            ))
          }
        </ul>
      </Section>

      <Section title="Pictorials">
        <ul>
          {
            data.allWpPost.edges.filter(edge => (
              edge.node.categories.nodes[0] &&
              edge.node.categories.nodes[0].name === "pictorials"
            )).slice(0, 3).map(edge => (

              <Link to={`/content${edge.node.uri}`}>
                <li >
                  <ArticleTitle path={edge.node} />
                </li>
              </Link>

            ))
          }
        </ul>
      </Section>

      <Section title="collections">
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
      </div>

    </Layout>
  )
}

export default Homepage
