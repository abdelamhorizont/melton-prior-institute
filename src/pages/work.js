import * as React from "react"
// import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'

export default function Work() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "features"}}}}}) {
  //       edges {
  //         node {
  //           id
  //           categories {
  //             nodes {
  //               name 
  //             }
  //           }
  //           title
  //           date(formatString: "MMMM D, YYYY")
  //           author {
  //             node {
  //               name
  //             }
  //           }
  //           excerpt
  //           uri
  //         }
  //       }
  //     }
  //   }
  //   `)

  return (
    <Layout>
      {/* <ul>
        {
          data.allWpPost.edges.map(edge => (

            <Link to={`/content${edge.node.uri}`}>
              <li key={edge.node.id}>                
                <ArticleTitle path={edge.node} />
                <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
              </li>
            </Link>

          ))
        }
      </ul> */}

    </Layout>
  )
}