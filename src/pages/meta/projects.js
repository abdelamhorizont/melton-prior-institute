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
            id
          }
          allWpPage(
            filter: {parentId: {eq: "cG9zdDoxMzY4NA=="}}
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

  const parentPage = data.wpPage
  const childrenPages = data.allWpPage.nodes

  console.log('wpPag', parentPage, 'childpag', childrenPages)

  return (
    <Layout>
      <div className={contentPage}>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>Projects</h4></div>
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