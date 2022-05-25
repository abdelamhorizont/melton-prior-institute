import * as React from "react"


import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import Section from '../../components/section/section'

export default function Collection({ data }) {
  return (
    <Layout>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
   wpCategory(id: {eq: $id}) {
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
 `