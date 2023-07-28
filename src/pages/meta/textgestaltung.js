import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage,
  topBrackets,
  articleWrapper,
  pageContent,
  articleContent,
  sectionTitle,
  metaNav
} from '../../styles/content.module.scss'

export default function Projects() {
  const data = useStaticQuery(graphql`
      query {
        wpPage(title: {eq: "Textgestaltung"}){
            content
            id
          }
        }   
    `)

  const parentPage = data.wpPage

  return (
    <Layout>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>Typografie</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>



          <div className={articleContent}>
          {/* <div className={articleContent}> */}
          <div dangerouslySetInnerHTML={{ __html: parentPage.content }} />
          {/* </div> */}
          </div>

        </div>


      
    </Layout>
  )
}