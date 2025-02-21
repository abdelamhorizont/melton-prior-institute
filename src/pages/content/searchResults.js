import * as React from "react"
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import {
  articleFeature
} from '../../components/article/article.module.scss'
import {
  results
} from '../../styles/content.module.scss'

const POSTS_PER_PAGE = 10;

export default function SearchResults() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 100) {
        edges {
          node {
            id
            title
            date(formatString: "MMMM D, YYYY")
            author {
              node {
                name
              }
            }
            excerpt
            uri
            featuredImage {
              node {
                title
                image {
                  url
                }
              }
            }
            categories {
              nodes {
                name 
              }
            }
          }
        }
      }
    }
  `)

  const [searchData, setSearchData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const childToParent = (childdata) => {
    setSearchData(childdata);
  }

  const filteredArticles = data.allWpPost.edges.filter(edge =>
    edge.node.title.toLowerCase().includes(searchData.toLowerCase())
  )

  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <Layout childToParent={childToParent}>
      <div>
        <div> Search results for {searchData}
        </div>
        <ul className={results}>
          {
            paginatedArticles.map(edge => (
              <Link to={`/content${edge.node.uri}`} key={edge.node.id}>
                <li>
                  <Article tags={true} path={edge.node} className={articleFeature} />
                </li>
              </Link>
            ))
          }
        </ul>
        <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </Layout>
  )
}