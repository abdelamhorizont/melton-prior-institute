import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import Tags from '../../components/tags/tags'

import {
  articleFeature
} from '../../components/article/article.module.scss'

import {
  categoryOverview,
  tagsSidebar,
  results,
  bracket
} from '../../styles/content.module.scss'

export default function Pictorials() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: {order: DESC, fields: date}, filter: {categories: {nodes: {elemMatch: {name: {eq: "pictorials"}}}}}) {
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
    edge.node.tags.nodes.some(node => selectedTags.includes(node?.name))
  )

  return (
    <Layout>
       <div className={categoryOverview}>
        <div className={tagsSidebar}>
          <Tags handleTags={handleTags} deleteTags={deleteTags} />
        </div>

      <div className={results}>
        {selectedTags.length > 0 ?
          <ul>
            {
              selectedPictorials.map(edge => (
                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article tags={true} path={edge.node} excerpt={true} className={articleFeature}/>
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
                    <Article tags={true} path={edge.node} excerpt={true} excerpt={true} className={articleFeature}/>
                  </li>
                </Link>
              ))
            }
          </ul>
        }
      </div>
    </div>
    </Layout>
  )
}