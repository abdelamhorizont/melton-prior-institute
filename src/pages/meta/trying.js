import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage
} from '../../styles/content.module.scss'

export default function About() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Trying"}) {
            content
          }
        }   
    `)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} className={contentPage} />
    </Layout>
  )
}