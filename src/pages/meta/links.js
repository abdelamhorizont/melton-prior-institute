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




export default function Links() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Links"}) {
            content
            id
          }
          allWpPage(filter: {parentId: {eq: ""}}) {
            nodes {
              id
              title
              content
            }
          }
        }   
    `)

  const parentPage = data.wpPage
  const childrenPages = data.allWpPage.nodes

  console.log('parnpag:', parentPage, 'childrenPages:', childrenPages )


  return (
    <Layout>
      <div className={contentPage}>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>Links</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: parentPage.content }} className={pageContent} />
        </div>


        {childrenPages.map(page => (
          <div key={page.title} className={articleWrapper}>
            <div className={sectionTitle}><h4>{page.title}</h4></div>
            <div className={topBrackets}>
              <span>]</span>
              <span>[</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: page.content }} className={pageContent} />
          </div>
        ))}
      </div>
    </Layout>
  )
}