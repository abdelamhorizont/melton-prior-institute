import * as React from "react"
import { useState, useEffect } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'

export default function Features() {
  const data = useStaticQuery(graphql`
    query {
      allWpTag {
        nodes {
          name
        }
      }
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
            excerpt
            uri
          }
        }
      }
    }
    `)

  const tags = data.allWpTag.nodes
  const features = data.allWpPost.edges

  const [selectedTags, setSelectedTags] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState(features)
  const [filterActtive, setFilterActive] = useState(false)

  const handleTags = () => {
    // setSelectedTags([...selectedTags, node.name])
    setFilterActive(true)
    // if(selectedTags.length > 0){
    //   setFilterActive(true)
    // } else {
    //   setFilterActive(false)
    // }

    // if(filterActtive){
      setSelectedFeatures(
        features.filter(edge =>
          edge.node.tags.nodes[0]
        ).filter((edge, index) =>
          edge.node.tags.nodes.map(node =>
            selectedTags.includes(node.name)
          )[index]
        )
      )        
    // }
  }

//tag eingabe lagged 1 Click behind, lösung durch useEffect
  // useEffect(()=>{
  //   handleTags()
  // }, handleTags)

  // useEffect(()=>{
  //   filterFunction()
  // },[selectedFeatures,filterFunction])

  // let intersection = tags.filter(tag =>
  //   selectedTags.includes(tag)
  //   )

  return (
    <Layout >
      <div>
        <h2>active Tags</h2>
        <ul>
          {
            selectedTags.map(node => (
              <li>
                {node}
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <h2>Tags</h2>
        <ul>
          {
            tags.map(node => (
              <li key={node.id}>
                <button value={node.name} onClick={() => {
                  setSelectedTags([...selectedTags, node.name])
                  handleTags()
                }
                }>{node.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <ul>
          {
            selectedFeatures.map(edge => (
              <Link to={`/content${edge.node.uri}`}>
                <li key={edge.node.id}>
                  <Article path={edge.node} />
                </li>
              </Link>
            ))
          }
        </ul>
      </div>

    </Layout>
  )
}

//Notizen
  // const features = data.allWpPost.edges.filter(edge =>
  //   edge.node.title.toLowerCase().includes(searchData)
  // )