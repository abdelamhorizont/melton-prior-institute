import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage,
  topBrackets,
  articleWrapper,
  pageContent,
  sectionTitle,
  metaNav
} from '../../styles/content.module.scss'




export default function Links() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "Links"}) {
            content
            id
          }
          allWpPage(
            filter: {parentId: {eq: "cG9zdDoxMTk="}}
            sort: { order: ASC, fields: menuOrder }
          ) {
            nodes {
              id
              title
              content
            }
          }
        }   
    `)


  // console.log('wpPag', data.wpPage, 'childpag', data.allWpPage.nodes)


  const parentPage = data.wpPage
  const childrenPages = data.allWpPage.nodes


  return (
    <Layout>
      <div className={contentPage}>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>Links</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>


        <div 
          className={pageContent}/>
          <div className={pageContent}>
          <div dangerouslySetInnerHTML={{ __html: parentPage.content }} />
            <ul className={metaNav}>
            {childrenPages.map((page, index) => (
              <li><a key={index} href={`#[${index + 1}]`}>{page.title}</a></li>
            ))}
            </ul>
          </div>

          </div>

        {childrenPages.map((page, index) => (
          <div key={page.title} id={`[${index + 1}]`} className={articleWrapper}>
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