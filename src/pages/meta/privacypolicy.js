import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

export default function PrivacyPolicy() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Privacy Policy"}) {
            content
          }
        }   
    `)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  )
}