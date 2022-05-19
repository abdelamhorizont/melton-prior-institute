import * as React from "react"
import { useState } from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import Tags from '../../components/tags/tags'

export default function Collections() {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory(filter: {name: {eq: "collections"}}) {
        nodes {
          name
          wpChildren {
            nodes {
              name
              language {
                code
              }
              posts {
                nodes {
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
          }
        }
      }
    `)

  const collections = data.allWpCategory.nodes[0].wpChildren.nodes

  // const collections = data.allWpPost.edges.filter(edge =>
  //   edge.node.language.code == "EN"
  // )

  const collectionTitles = data.allWpCategory.nodes

  const [selectedTags, setSelectedTags] = useState([])

  const handleTags = (selectedTag) => {
    setSelectedTags([...selectedTags, selectedTag])
  }

  const deleteTags = (selectedTag) => {
    setSelectedTags(() => selectedTags.filter(tag => tag !== selectedTag))
  }

  // const selectedCollections = collections.filter(node => node.posts.nodes.tags.nodes[0]).filter(node =>
  //   node.tags.nodes.some(node => selectedTags.includes(node.name.toLowerCase())))

  // const selectedCollections = collections.filter(edge => edge.node.tags.nodes[0]).filter(edge =>
  //   edge.node.tags.nodes.some(node => selectedTags.includes(node.name.toLowerCase())))

  return (
    <Layout >
      <Tags handleTags={handleTags} deleteTags={deleteTags} />

      <div>
        {collectionTitles.map(node =>
          node.wpChildren.nodes.filter(node =>
            node.language.code == "EN"
          ).map(node =>
            <>
              <h1>{node.name}</h1>

              <div>
                {selectedTags.length !== 0 ?
                  <ul>
                    {
                      node.posts.nodes.filter(node => node.tags.nodes[0]).filter(node =>
                        node.tags.nodes.some(node => selectedTags.includes(node.name.toLowerCase()))).map(edge => (
                          <Link to={`/content${edge.node.uri}`}>
                            <li key={edge.node.id}>
                              <Article path={edge.node} excerpt={true} />
                            </li>
                          </Link>
                        ))
                    }
                  </ul>
                  :
                  <ul>
                    {
                      node.posts.nodes.map(node => (
                        <Link to={`/content${node.uri}`}>
                          <li key={node.id}>
                            <Article path={node} excerpt={true} />
                          </li>
                        </Link>
                      ))
                    }
                  </ul>
                }
              </div>
            </>

          )
        )
        }

      </div>

    </Layout>
  )
}
