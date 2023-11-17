import * as React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import Section from '../../components/section/section'


import {
  collections,
  collectionWrapper,
  collectioneTitle
} from '../../styles/content.module.scss'

import {
  articleFeature,
  articlePictorial,
  articleCollection,
  thumbnail
}  from '../../components/layout/layout.module.scss'


export default function Collection({ data }) {
  const collectionTitle = data.wpCategory

  return (
    <Layout>
      <div className={collections}>
        <div className={collectionWrapper}>
        <h1 className={collectioneTitle}>{collectionTitle.name}</h1>
          <div>
            <ul>
                {
              collectionTitle.posts.nodes.map(node => (
                <Link to={`/content${node.uri}`}>
                  <li key={node.id}>
                    <Article tags={true} path={node} excerpt={true} className={articleCollection} />
                  </li>
                </Link>
              ))
            } </ul>
            </div>
        </div>
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