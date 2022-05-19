import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import Tags from '../../components/tags/tags'

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
            autor {
              autor
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                title
                image {
                  url
                }
              }
            }
            categories {
              nodes {
                name 
              }
            }
            tags {
              nodes {
                name
              }
            }
            language {
              code
            }
            translations {
              uri
              language {
                code
              }
            }
            excerpt
            uri
          }
        }
      }
    }
    `)

  const pictorials = data.allWpPost.edges.filter( edge =>
    edge.node.language.code == "EN"
  )
  const [selectedTags, setSelectedTags] = useState([])

  const handleTags = (selectedTag) => {
    setSelectedTags([...selectedTags, selectedTag])
  }

  const deleteTags = (selectedTag) => {
    setSelectedTags(() => selectedTags.filter(tag => tag !== selectedTag))
  }

  const selectedPictorials = pictorials.filter(edge => edge.node.tags.nodes[0]).filter(edge =>
    edge.node.tags.nodes.some(node => selectedTags.includes(node.name))
  )

  return (
    <Layout>
      <Tags handleTags={handleTags} deleteTags={deleteTags} />

      <div>
        {selectedTags.length !== 0 ?
          <ul>
            {
              selectedPictorials.map(edge => (
                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article path={edge.node} />
                  </li>
                </Link>
              ))
            }
          </ul>
          :
          <ul>
            {
              pictorials.map(edge => (
                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article path={edge.node} excerpt={true} />
                  </li>
                </Link>
              ))
            }
          </ul>
        }
      </div>

    </Layout>
  )
}