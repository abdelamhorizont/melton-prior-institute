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


export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Contact"}) {
            title
            content
          }
        }   
    `)

  return (
    <Layout>

<div className={contentPage}>
        <div class={articleWrapper}>
          <div class={sectionTitle}><h4>Contact</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} className={pageContent}/>
        </div>

      
      </div>


    </Layout>
  )
}