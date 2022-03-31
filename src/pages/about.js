import * as React from "react"
// import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'

export default function About() {
    // const data = useStaticQuery(graphql`
    // query {
    //     wpPage(title: {eq: "About"}) {
    //         content
    //       }
    //     }   
    // `)

    return (
        <Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} /> */}

        </Layout>
    )
}