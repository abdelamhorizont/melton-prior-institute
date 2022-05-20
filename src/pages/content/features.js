import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import Tags from '../../components/tags/tags'

import {
  articleFeature
} from '../../components/article/article.module.scss'

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
                title
                image {
                  url
                }
              }
            }
            id
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
            language {
              code
            }
            translations {
              uri
              language {
                code
              }
              tags {
                nodes {
                  name
                }
              }
            }
            excerpt
            uri
          }
        }
      }
    }
    `)

  const features = data.allWpPost.edges.filter( edge =>
    edge.node.language.code == "EN"
  )
  const [selectedTags, setSelectedTags] = useState([])

  const handleTags = (selectedTag) => {
    setSelectedTags([...selectedTags, selectedTag])
  }

  const deleteTags = (selectedTag) => {
    setSelectedTags(() => selectedTags.filter(tag => tag !== selectedTag))
  }

  const selectedFeatures = features.filter(edge => edge.node.tags.nodes[0]).filter(edge =>
    edge.node.tags.nodes.some(node => selectedTags.includes(node.name.toLowerCase())))

  return (
    <Layout >
      <Tags handleTags={handleTags} deleteTags={deleteTags} />

      <div>
        {selectedTags.length > 0 ?
          <ul>
            {
              selectedFeatures.map(edge => (
                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article path={edge.node} excerpt={true} className={articleFeature} />
                  </li>
                </Link>
              ))
            }
          </ul>
          :
          <ul>
            {
              features.map(edge => (
                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article path={edge.node} excerpt={true} className={articleFeature}/>
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



//eleganter wäre wenn nur aus eine, State der Features gefiltert würde

  // const [selectedFeatures, setSelectedFeatures] = useState(features)

  // useEffect(()=>{
    // setSelectedFeatures(
    //   features.filter(edge => edge.node.tags.nodes[0]).filter((edge, index) =>
    //     edge.node.tags.nodes.map(node => selectedTags.includes(node.name))[index]
    //   )
    // )
  // })

  // welche tag Überschneidungen es gibt

  // let intersection = tags.filter(tag =>
  //   selectedTags.includes(tag)
  //   )
