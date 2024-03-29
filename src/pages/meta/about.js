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
      allWpPage(
        filter: {parentId: {eq: "cG9zdDo5NjE0"}}
        sort: { order: DESC, fields: menuOrder }
      ) {
        nodes {
          menuOrder
          id
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
