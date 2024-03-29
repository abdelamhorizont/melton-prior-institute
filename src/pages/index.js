import * as React from "react"
import { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectFade } from 'swiper';

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
  moreButton,
  sisterActive
} from './index.module.scss'

import {
  categoriesSection,
  categoriesSectionHeader,
  recommendedSection,
  recommendedSectionHeader,
  featuresCategory,
  pictorialsCategory,
  collectionsCategory,
  categoryActive
} from '../components/section/section.module.scss'

import {
  categoriesArticle,
  recommendedArticle
} from '../components/article/article.module.scss'

import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import '../styles/swiper.scss';

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory(filter: {name: {eq: "collections"}, language: {code: {eq: EN}}}) {
        nodes {
          wpChildren {
            nodes {
              name
              uri
              posts {
                nodes {
                  featuredImage {
                    node {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      allWpPost(sort: {order: DESC, fields: date}) {
        edges {
          node {
            featuredImage {
              node {
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

  const [mobile, setMobile] = useState(false)

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    setMobile(isBrowser() && window.screen.width < 960 ? true : false)
  }, []);


  const articles = data.allWpPost.edges.filter(edge =>
    edge.node.language.code === "EN"
  )

  const collectionTitles = data.allWpCategory.nodes[0].wpChildren.nodes

  const [category, setCategory] = useState({
    features: true,
    pictorials: false,
    collections: false
  })

  return (
    <Layout path={articles}>
      <div className={recommended}>
        <Section title="Recommended" className={recommendedSection}>
          <div className={recommendedSectionHeader}>
            <h4>Recommended</h4>
            <span>]</span>
            <span>[</span>
          </div>

          <div className="swiper-button-prev">&lt;</div>
          <div className="swiper-button-next">&gt;</div>
          <Swiper className="my-swiper"
            modules={[Navigation, A11y, Keyboard, Pagination, EffectFade]}
            // effect={"fade"}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              type: "custom",
              el: ".swiper-pagination",
              renderCustom: function (swiper, current, total) { return current + '&frasl;' + total }

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
                  node?.name === "recommended"
                ))).map(edge => (
                  <div className="carousel-cell">
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div style={isActive ? { opacity: '1' } : { opacity: '0' }}>
                          <Link to={`/content${edge.node.uri}`}>
                            <Article tags={true} path={edge.node} excerpt={true} className={recommendedArticle} />
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

      <div className={categoriesLists} id="categories">

        <Section className={categoriesSection} id={ `${categoriesSection} ${category.features && categoryActive}`}>
          <div className={categoriesSectionHeader}>

          <Link to={!mobile ? `/content/features` : `#categories`}>
            <h4 className={mobile && category.features && categoryActive} onClick={() => {
              mobile &&
                setCategory({
                  features: true,
                  pictorials: false,
                  collections: false
                })
            }}>Features</h4>
          </Link>
          <span>]</span>
            </div>
 
          <ul className={mobile && category.features && categoryActive}>
            {
              articles.filter(edge => (
                edge.node.categories.nodes[0] &&
                edge.node.categories.nodes[0].name === "features"
              )).slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article tags={false} excerpt={true} path={edge.node} className={categoriesArticle} />
                  </li>
                </Link>

              ))
            }
          </ul>
          <span>[</span>
          {/* <p className={moreButton}>...more</p> */}

          <Link to={`/content/features`} className={moreButton} id={mobile && category.features && categoryActive}>...more</Link>

        </Section>

        <Section className={categoriesSection} id={pictorialsCategory}>
          <div className={categoriesSectionHeader}>

          <Link to={!mobile ? `/content/pictorials` : `#categories`}>
            <h4 className={mobile && category.pictorials && categoryActive} onClick={() => {
              mobile &&
                setCategory({
                  features: false,
                  pictorials: true,
                  collections: false
                })
            }}>Pictorials</h4>
          </Link>
          <span>]</span>
            </div>

          <ul className={mobile && category.pictorials && categoryActive}>
            {
              articles.filter(edge => (
                edge.node.categories.nodes[0] &&
                edge.node.categories.nodes[0].name === "pictorials"
              )).slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article tags={false} excerpt={true} path={edge.node} className={categoriesArticle} />
                  </li>
                </Link>

              ))
            }
          </ul>
          <span>[</span>
          {/* <p className={moreButton}>...more</p> */}
          <Link to={`/content/pictorials`} className={moreButton} id={mobile && category.pictorials && categoryActive}>...more</Link>

        </Section>

        <Section className={categoriesSection} id={collectionsCategory}>
          <div className={categoriesSectionHeader}>
            <Link to={!mobile ? `/content/collections` : `#categories`}>
              <h4 className={mobile && category.collections && categoryActive} onClick={() => {
                mobile &&
                  setCategory({
                    features: false,
                    pictorials: false,
                    collections: true
                  })
              }}>Collections</h4>
            </Link>
            <span>]</span>
          </div>
          <ul className={mobile && category.collections ? `${collectionsColumn} ${categoryActive}` : collectionsColumn}>
            {
              collectionTitles.map(node =>
                <Link to={`/content${node.uri}`}>
                  <li key={node?.name} className={collectionsArticle} >
                    <div style={{ backgroundImage: 'url(' + node?.posts?.nodes[0]?.featuredImage?.node?.url + ')' }}>
                    </div>
                    <h1>{node?.name}</h1>
                  </li>
                </Link>
              )
            }
          </ul>
          <span>[</span>
          {/* <p className={moreButton}>...more</p> */}
          <Link to={`/content/collections`} className={moreButton} id={mobile && category.collections && categoryActive}>...more</Link>
        </Section>
      </div>

    </Layout >
  )
}

export default Homepage
