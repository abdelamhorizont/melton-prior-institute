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
        id
        content
      }
      allWpPage(filter: {parent: {id: {eq: "cG9zdDo5NjE0"}}}) {
        nodes {
          title
          content
        }
      }
    }
  `)

  const aboutPage = data.wpPage
  const childrenPages = data.allWpPage.nodes

  console.log('aboutPage:', aboutPage, 'childrenPages:', childrenPages )

  return (
    <Layout>
      <div className={contentPage}>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>About</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: aboutPage.content }} className={pageContent} />
        </div>

        <div className={articleWrapper} id="linton">
          <div className={sectionTitle}><h4>Linton Archive</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          {childrenPages.length > 0 && (
            <div dangerouslySetInnerHTML={{ __html: childrenPages[0].content }} className={pageContent} />
          )}
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
