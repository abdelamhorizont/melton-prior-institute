import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';

import Flickity from 'react-flickity-component'
// import fade from 'flickity-fade'

import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import Article from '../components/article/article'

import "../styles/reset.scss";
import "../styles/global.scss";
import {
  categories_lists
} from './index.module.scss'

import '../styles/swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';

const flickityOptions = {
  fade: true,
  initialIndex: 2,
  wrapAround: true,
  draggable: false,
  pageDots: false,
  adaptiveHeight: true,
  accessibility: true,
  setGallerySize: true

}

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
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
    edge.node.language.code == "EN"
  )

  return (
    <Layout>

      <Section title="Recommended">
        {/* <Swiper className="my-swiper"
          modules={[Navigation, A11y, Keyboard, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          loop={true}
          navigation={
            { nextEl: ".swiper-button-next" },
            { prevEl: ".swiper-button-prev" }
          }
          keyboard={
            { enabled: true },
            { onlyInViewport: true }
          }
        >
          {
            data.allWpPost.edges.slice(0, 4).map(edge => (
              <SwiperSlide>
                <Link to={`/content${edge.node.uri}`}>
                  <Article path={edge.node} excerpt={true} />
                </Link>
              </SwiperSlide>
            ))
          }

          <SwiperSlide><h1>hallo</h1></SwiperSlide>
          <SwiperSlide><h1>wie gehts</h1></SwiperSlide>
          <SwiperSlide><h1>tschüss</h1></SwiperSlide>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper> */}

        <Flickity options={flickityOptions}>
          {
            articles.filter(edge => (
              edge.node.categories.nodes[0] &&
              edge.node.categories.nodes[0].name === "recommended"
            )).map(edge => (
              <div className="carousel-cell">
                <Link to={`/content${edge.node.uri}`}>
                  <Article path={edge.node} excerpt={true} />
                </Link>
              </div>
            ))
          }
        </Flickity>

      </Section>

      <div className={categories_lists}>
        <Link to={`/content/features`}>
          <Section title="Features">
            <ul>
              {
               articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "features"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <p>[ ...more</p>
          </Section>
        </Link>

        <Link to={`/content/pictorials`}>
          <Section title="Pictorials">
            <ul>
              {
                articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "pictorials"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <p>[ ...more</p>
          </Section>
        </Link>

        <Link to={`/content/collections`}>
          <Section title="Collections">
            <ul>
              {
                articles.filter(edge => (
                  edge.node.categories.nodes[0] &&
                  edge.node.categories.nodes[0].name === "collections"
                )).slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <p>[ ...more</p>
          </Section>
        </Link>
      </div>

    </Layout>
  )
}

export default Homepage
