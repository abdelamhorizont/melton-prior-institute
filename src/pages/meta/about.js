import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage,
  topBrackets,
  articleWrapper,
  pageContent,
  sectionTitle
} from '../../styles/content.module.scss'

export default function About() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "About"}) {
            content
          }
          allWpPage(filter: {title: {eq: "Linton Archive"}}) {
            nodes {
              title
              content
            }
          }
        }   
    `)

  return (
    <Layout>
      <div className={contentPage}>
        <div class={articleWrapper}>
          <div class={sectionTitle}><h4>About</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} className={pageContent} />
        </div>

        <div class={articleWrapper} id="linton">
          <div class={sectionTitle}><h4>Linton Archive</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.allWpPage.nodes[0].content }} className={pageContent} />
        </div>
      </div>
    </Layout>
  )
}