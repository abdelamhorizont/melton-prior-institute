import * as React from "react"

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'

import {
  collections,
  collectionWrapper,
  collectionTitle
} from '../../styles/content.module.scss'

import {
  articleFeature,
  articleCollection,
  thumbnail
} from '../../components/article/article.module.scss'

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

  const collectionTitles = data.allWpCategory.nodes

  return (
    <Layout >

      <div className={collections}>
        {collectionTitles.map(node =>
          node.wpChildren.nodes.filter(node =>
            node.language.code == "EN"
          ).map(node =>
            <>
            <div className={collectionWrapper}>
              <h1 className={collectionTitle}>{node.name}</h1>

                <div>
                  <ul>
                    {
                      node.posts.nodes.map(node => (
                        <Link to={`/content${node.uri}`}>
                          <li key={node.id}>
                            <Article path={node} excerpt={true} className={articleCollection} />
                          </li>
                        </Link>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </>
          )
        )}
      </div>

    </Layout>
  )
}
