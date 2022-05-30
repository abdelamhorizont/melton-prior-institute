import * as React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import Section from '../../components/section/section'

export default function Collection({ data }) {
  const collectionTitle = data.wpCategory

  return (
    <Layout>
      <div>
        <h1>{collectionTitle.name}</h1>

        {
          collectionTitle.posts.nodes.map(node => (
            <Link to={`/content${node.uri}`}>
              <li key={node.id}>
                <Article path={node} excerpt={true} />
              </li>
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export const data = graphql`
query ($id: String) {
   wpCategory(id: {eq: $id}) {
       name
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
 `