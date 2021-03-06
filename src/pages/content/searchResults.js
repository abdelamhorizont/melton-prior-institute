import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../../components/layout/layout'
import Section from '../../components/section/section'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import ArticleBody from '../../components/articleBody/articleBody'
import Article from '../../components/article/article'

export default function SearchResults() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
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
            excerpt
            uri
          }
        }
      }
    }
    `)

  const [searchData, setSearchData] = useState('');

  const childToParent = (childdata) => {
   setSearchData(childdata);
  }
  
  const articles = data.allWpPost.edges.filter(edge =>
    edge.node.title.toLowerCase().includes(searchData)
  )

  return (
    <Layout childToParent={childToParent} >
    {searchData}

      <ul>
        {
          articles.map(edge => (

            <Link to={`/content${edge.node.uri}`}>
              <li key={edge.node.id}>
                <Article path={edge.node} />
              </li>
            </Link>

          ))
        }
      </ul>

    </Layout>
  )
}