import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectFade } from 'swiper';

import Flickity from 'react-flickity-component'
// import fade from 'flickity-fade'

import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import Article from '../components/article/article'

import "../styles/reset.scss";
import "../styles/global.scss";
import {
  categoriesLists,
  recommended,
  features,
  pictorials,
  collections,
  collectionsArticle,
  collectionsColumn,
  section,
  // featureSection,
  moreButton
} from './index.module.scss'

import {
  categoriesSection,
  recommendedSection
} from '../components/section/section.module.scss'

import {
  categoriesArticle,
  recommendedArticle
} from '../components/article/article.module.scss'



import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import '../styles/swiper.scss';

const flickityOptions = {
  fade: true,
  initialIndex: 2,
  wrapAround: true,
  draggable: false,
  pageDots: true,
  adaptiveHeight: true,
  accessibility: true,
  setGallerySize: true

}

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory(filter: {name: {eq: "collections"}, language: {code: {eq: EN}}}) {
        nodes {
          wpChildren {
            nodes {
              name
              uri
            }
          }
        }
      }
      allWpPost{        
        edges {
          node {
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                title
                image {
                  url
                }
              }
            }
            id
            categories {
              nodes {
                name 
              }
            }
            title
            date(formatString: "MMMM D, YYYY")
            author {
              node {
                name
              }
            }
            autor {
              autor
            }
            excerpt
            tags {
              nodes {
                name
              }
            }
            language {
              code
            }
            translations {
              uri
              language {
                code
              }
            }
            uri
          }
        }
      }
    }
    `)

  const articles = data.allWpPost.edges.filter(edge =>
    edge.node.language.code === "EN"
  )

  const collectionTitles = data.allWpCategory.nodes[0].wpChildren.nodes

  return (
    <Layout>
      <div className={recommended}>
        <Section title="Recommended" className={recommendedSection}>
        <div className="swiper-button-prev">&lt;</div>
        <div className="swiper-button-next">&gt;</div>
          <Swiper className="my-swiper"
            modules={[Navigation, A11y, Keyboard, Pagination, EffectFade]}
            // effect={"fade"}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              type: "fraction",
              el: ".swiper-pagination"
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
            }
            keyboard={{
              enabled: true,
              onlyInViewport: true
            }}
          >

            {
              articles.filter(edge => (
                edge.node.categories.nodes[0] &&
                edge.node.categories.nodes.some(node =>
                  node.name === "recommended"
                ))).map(edge => (
                  <div className="carousel-cell">
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div style={isActive ? { opacity: '1' } : { opacity: '0' }}>
                          <Link to={`/content${edge.node.uri}`}>
                            <Article path={edge.node} excerpt={true} className={recommendedArticle} />
                          </Link>
                        </div>
                      )}
                    </SwiperSlide>
                  </div>
                ))
            }


          </Swiper>
          <div className="swiper-pagination"></div>
        </Section >
      </div >
      <div className={categoriesLists}>
        <Link to={`/content/features`}>
          <Section className={categoriesSection} title="Features">
            <ul>
              {
                articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "features"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} className={categoriesArticle} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <p className={moreButton}>...more</p>
          </Section>
        </Link>

        <Link to={`/content/pictorials`}>
          <Section title="Pictorials" className={categoriesSection}>
            <ul>
              {
                articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "pictorials"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} className={categoriesArticle} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <p className={moreButton}>...more</p>
          </Section>
        </Link>

        <Link to={`/content/collections`}>
          <Section title="Collections" className={categoriesSection}>
            <ul className={collectionsColumn}>
              {/* {
                articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "collections"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} className={categoriesArticle}/>
                    </li>
                  </Link>

                ))
              } */}
              {
                collectionTitles.map(node =>
                  <Link to={`/content${node.uri}`}>
                    <li key={node.name} className={collectionsArticle}>
                      <h1>{node.name}</h1>
                    </li>
                  </Link>
                )
              }
            </ul>
            <p className={moreButton}>...more</p>
          </Section>
        </Link>
      </div>

    </Layout >
  )
}

export default Homepage
