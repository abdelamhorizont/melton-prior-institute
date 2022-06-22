import * as React from "react"
import { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

import { useReactToPrint } from 'react-to-print';

import parse, { domToReact, attributesToProps } from 'html-react-parser';

import Layout from '../../components/layout/layout'
import Article from '../../components/article/article'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import Section from '../../components/section/section'

import "../../styles/simpleReactLightbox.scss";
import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from 'react-photoswipe-gallery'

import {
  articleWrapper,
  articleTagWrapper,
  topBrackets,
  articleContent,
  relatedPostsWrapper,
  lightboxImageWrapper,
  lightboxImage
} from '../../styles/content.module.scss'

const lightboxOptions = {
  settings: {
    overlayColor: "rgb(0, 0, 0, 0.2)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    disableWheelControls: true,
    lightboxTransitionTimingFunction: "backInOut",
    disablePanzoom: true,
  },
  buttons: {
    backgroundColor: "rgba(126, 172, 139, 0)",
    iconColor: "rgb(0,0,0)",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showThumbnailsButton: false,
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '10px',
    thumbnailsGap: '0 10px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 1,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['400px', 'auto']
  }
};


export default function Post({ data }) {
  // const [img, setImg] = useState(document.getElementsByClassName("SRLImage"));

  // useEffect(() => {
  //   //  setImg(document.getElementsByClassName("SRLImage"))
  //   // const imgWrapper = document.getElementsByClassName("SRLElementWrapper")
  //   setImg(document.getElementsByClassName("SRLImage"))
  //   console.log(img)      

  // },[]);


  const callbacks = {
    onLightboxOpened: object => {

      // object.currentSlide.source = object.currentSlide.source.replace('http://localhost:8000', '') + " 485w"
      // object.currentSlide.thumbnail = object.currentSlide.source.replace('http://localhost:8000', '') + " 485w"
      // object.currentSlide.srl_gallery_image="true"
      // object.currentSlide.srcset = object.currentSlide.source.replace('http://localhost:8000', '')
      // console.log(object.currentSlide)   
      // setImg(document.getElementsByClassName("SRLElementWrapper"))
    }
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const tags = data.wpPost.tags.nodes.map(node => node.name)
  const translatedTags = data.wpPost.translations[0].tags.nodes.map(node => node.name)

  const relatedPosts = data.allWpPost.edges.filter(edge => edge.node.tags.nodes[0]).filter(edge =>
    edge.node.tags.nodes.some(node => tags.includes(node.name) || translatedTags.includes(node.name))).filter(edge => edge.node.id !== data.wpPost.id)

  // let [counter, setCounter] = useState([])
  let counter = []

  return (
    <Layout >

      <div ref={componentRef} className={articleWrapper}>
        <button onClick={handlePrint}>Print</button>
        <div className={topBrackets}><span>]</span><span>[</span></div>
        <div className={articleTagWrapper} >
          {tags.length > 0 ?
            tags.map(node => (
              <h4>[{node}]</h4>
            ))
            :
            translatedTags.map(node => (
              <h4>[{node}]</h4>
            ))
          }
        </div>

        <div className={articleContent}>
          <ArticleTitle path={data.wpPost} />
          <Gallery>
            {data.wpPost.content &&
              parse(data.wpPost.content, {
                replace: domNode => {
                  let reg = /(\[\d+\])/g
                  if (domNode.name && domNode.name.includes("picture")) {
                    const props = attributesToProps(domNode.attribs);
                    // console.log(domNode.children[2])
                    return (
                      <Item
                        content={
                          <div className={lightboxImageWrapper}>
                            <img src={domNode.children[2].attribs["data-src"]} srcset={domNode.children[2].attribs["data-srcset"]} />
                          </div>
                        }>

                        {({ ref, open }) => (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              open(e)
                            }}
                            ref={ref}
                          >
                            <img src={domNode.children[2].attribs["data-src"]} srcset={domNode.children[2].attribs["data-srcset"]} />                          </a>
                        )}
                      </Item>
                    )
                  } else if (domNode.data && domNode.data.match(reg)) {
                    const text = domNode.data.split(reg)
                    // setCounter([text.filter(text => text.match(reg))])
                    const footNote = text.filter(text => text.match(reg))
                    console.log(counter)
                    if(!counter.includes(footNote[0])){
                      counter.push(footNote[0])
                      return (
                        <>
                          {
                            text.map(text => text.match(reg) ?
                            <a href={"#" + text}> <span id={"ref" +text} className="MsoFootnoteReference">{text}</span> </a>
                            :
                            text
                            )
                          }
                        </>
                      )
                    } else{
                      return (
                        <>
                          {
                            text.map(text => text.match(reg) ?
                            <a href={"#ref" + text}> <span id={text} className="MsoFootnoteReference">{text}</span> </a>
                            :
                            text
                            )
                          }
                        </>
                      )
                    }
                  }
                }
              })
            }
          </Gallery>

          {/* <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} srl_gallery_image="true" /> */}
        </div>
      </div>

      <div className={relatedPostsWrapper}>
        <Section title="related Posts">
          <ul>
            {
              relatedPosts.slice(0, 3).map(edge => (

                <Link to={`/content${edge.node.uri}`}>
                  <li key={edge.node.id}>
                    <Article path={edge.node} excerpt={true} />
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

export const query = graphql`
query ($id: String) {
  wpPost(id: {eq: $id}) {
    id
    categories {
      nodes {
        name 
      }
    }
    title
    content
    date(formatString: "MMMM D, YYYY")
    author {
      node {
        name
      }
    }
    tags {
      nodes {
        name
      }
    }
    excerpt
    slug
    translations {
      tags {
        nodes {
          name
        }
      }
    }
  }
  allImageSharp(limit: 10) {
    nodes {
      gatsbyImageData(layout: FIXED)
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
        tags {
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
        excerpt
        uri
        translations {
          uri
        }
      }
    }
  }
}
`