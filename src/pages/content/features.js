import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../../components/layout/layout'
import Section from '../../components/section/section'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import ArticleBody from '../../components/articleBody/articleBody'
import Article from '../../components/article/article'

export default function Features() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "features"}}}}}) {
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

  // const childToParent = (childdata) => {
  //  setSearchData(childdata);
  // }


  // const [searchField, setSearchField] = useState("");
  
  const features = data.allWpPost.edges
  
  // const features = data.allWpPost.edges.filter(edge =>
  //   edge.node.title.toLowerCase().includes(searchData)
  // )

  // const handleChange = e => {
  //   setSearchField(e.target.value);
  // };

  return (
    <Layout >
    {searchData}

      <ul>
        {
          features.map(edge => (

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