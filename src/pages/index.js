import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';

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
const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost{        
        edges {
          node {
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
            uri
          }
        }
      }
    }
    `)

  return (
    <Layout>

      <Section title="Recommended">
        <Swiper className="my-swiper"
          modules={[Navigation, A11y, Keyboard]}
          // spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          // navigation={
          //   { nextEl: ".swiper-button-next" },
          //   { prevEl: ".swiper-button-prev" }
          // }
          // keyboard={
          //   { enabled: true },
          //   { onlyInViewport: true }
          // }
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
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </Section>

      <div className={categories_lists}>
        <Section title="features">
          <ul>
            {
              data.allWpPost.edges.filter(edge => (
                edge.node.categories.nodes[0] &&
                edge.node.categories.nodes[0].name === "features"
              )).slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li >
                    <Article path={edge.node} />
                  </li>
                </Link>

              ))
            }
          </ul>
        </Section>

        <Section title="Pictorials">
          <ul>
            {
              data.allWpPost.edges.filter(edge => (
                edge.node.categories.nodes[0] &&
                edge.node.categories.nodes[0].name === "pictorials"
              )).slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li >
                    <Article path={edge.node} />
                  </li>
                </Link>

              ))
            }
          </ul>
        </Section>

        <Section title="collections">
          <ul>
            {
              data.allWpPost.edges.slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li >
                    <Article path={edge.node} />
                  </li>
                </Link>

              ))
            }
          </ul>
        </Section>
      </div>

    </Layout>
  )
}

export default Homepage
