import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import Section from '../../components/section/section'

export default function Post({ data }) {
  //make array of tags from tags object
  const tags = data.wpPost.tags.nodes.map(node => node.name)

  const relatedPosts = data.allWpPost.edges.filter(edge => edge.node.tags.nodes[0]).filter(edge =>
    edge.node.tags.nodes.some(node => tags.includes(node.name))).filter(edge => edge.node.id !== data.wpPost.id)

  return (
    <Layout>
      {tags &&
        tags.map(node => (
          <h4>[{node}]</h4>
        ))
      }
      <Article path={data.wpPost} />
      <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />

      <Section title="related Posts">
        <ul>
          {
            relatedPosts.slice(0, 3).map(edge => (

              <Link to={`/content${edge.node.uri}`}>
                <li >
                  <Article path={edge.node} excerpt={true} />
                </li>
              </Link>

            ))
          }
        </ul>
      </Section>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpPost(id: {eq: $id}) {
    id
    categories {
      nodes {
        name 
      }
    }
    title
    content
    date(formatString: "MMMM D, YYYY")
    author {
      node {
        name
      }
    }
    tags {
      nodes {
        name
      }
    }
    excerpt
    slug
  }
  allWpPost{        
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
        excerpt
        uri
      }
    }
  }
}
`