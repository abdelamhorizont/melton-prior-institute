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


export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Projects"}) {
            content
          }
        }   
    `)

  return (
    <Layout>
      <div className={contentPage}>
        <div class={articleWrapper}>
          <div class={sectionTitle}><h4>Projects</h4></div>
        <div className={topBrackets}>
          <span>]</span>
          <span>[</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} className={pageContent} />
        </div>
      </div>
    </Layout>
  )
}