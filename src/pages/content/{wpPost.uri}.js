import * as React from "react"
import { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby'

// import SimpleReactLightbox from 'simple-react-lightbox'
// import { SRLWrapper } from "simple-react-lightbox";

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
  lightboxImageWrapper,
  lightboxImage
} from '../../styles/content.module.scss'

import {
  relatedPostsWrapper,
  categoriesSectionHeader
} from '../../components/layout/layout.module.scss'

import {
  articleFeature,
  articlePictorial
} from '../../components/article/article.module.scss'
import { width } from "dom7";



export default function Post({ data }) {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const tags = data.wpPost.tags.nodes.map(node => node && node?.name)
  const translatedTags = data.wpPost.translations && data.wpPost.translations[0] && data.wpPost.translations[0].tags.nodes.map(node => node && node?.name)

  const relatedPosts = data.allWpPost.edges.filter(edge => {
    if (!edge.node.tags.nodes[0]) {
      return false;
    }
    const hasMatchingTag = edge.node.tags.nodes.some(node => tags.includes(node?.name));
    const isSamePost = edge.node.id === data.wpPost.id;
    const isSameLanguage = edge.node.language.code === data.wpPost.language.code;

    return !isSamePost && hasMatchingTag && isSameLanguage;
    

  });
  
  



  let counter = []

  return (
    <Layout >
      <div ref={componentRef} className={articleWrapper}>
        <button onClick={handlePrint}><a href="#">Print</a></button>
        <div className={topBrackets}><span>]</span><span>[</span></div>
        <div className={articleTagWrapper} >
          {tags.length > 0 ?
            tags.map(node => (
              <h4>[{node}]</h4>
            ))
            :
            translatedTags && translatedTags.map(node => (
              <h4>[{node}]</h4>
            ))
          }
        </div>

        <div className={articleContent}>
          <ArticleTitle path={data.wpPost} />
          <Gallery id="my-gallery" withCaption>
            {data.wpPost?.content &&
              parse(data.wpPost.content, {
                replace: domNode => {
                  // footnotes
                  // console.log(data.wpPost.content)

                  let reg = /(\[\d+\])/g
                  if (domNode.data && domNode.data.match(reg)) {
                    const text = domNode.data.split(reg)
                    const footNote = text.filter(text => text.match(reg))
                    if (!counter.includes(footNote[0])) {
                      counter.push(footNote[0])
                      return (
                        <>
                          {
                            text.map(text => text.match(reg) ?
                              <a href={"#" + text}>
                                <span id={"ref" + text} className="MsoFootnoteReference">{text}</span>
                              </a>
                              :
                              text
                            )
                          }
                        </>
                      )
                    } else {
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

                  // links to other posts
                  if (domNode.name && domNode.name === "a" && new RegExp("^/en/|^/de/").test(domNode.attribs["href"])) {
                    const href = domNode.attribs["href"];
                    if (href.includes("/en/")) {
                      domNode.attribs["href"] = href.replace("/en/", "/content/en/");
                    } else if (href.includes("/de/")) {
                      domNode.attribs["href"] = href.replace("/de/", "/content/de/");
                    }
                  }
                  // images lightbox
                  else if (domNode.name && domNode.name.includes("picture")) {
                    return (
                      <Item
                        caption={domNode.children[1]?.attribs["src"]}
                        content={
                          <div className={lightboxImageWrapper}>
                            <a href={domNode.children[1]?.attribs["src"]} target="_blank">
                              <img src={domNode.children[1]?.attribs["src"]} srcset={domNode.children[1]?.attribs["srcset"]} />
                            </a>
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
                            <div className={lightboxImage}>
                              <img src={domNode.children[1]?.attribs["src"]} srcset={domNode.children[1]?.attribs["srcset"]} />
                            </div>
                          </a>
                        )}
                      </Item>
                    )
                  }
                  else if (domNode.name && domNode.name.includes("figure")) {
                    const src = domNode?.children[1]?.children[1]?.children[0]?.attribs && domNode?.children[1]?.children[1]?.children[0]?.attribs["src"]?.replace('http:', 'https:') || domNode.children[0].attribs['src']?.replace('http:', 'https:') || ''
                    const srcset = domNode.children[0]?.attribs && domNode.children[0]?.attribs["srcset"]?.replace('http:', 'https:') || ''
                    const caption =  (domNode.children[2]?.children && domNode.children[2]?.children[0].data) || domNode.children[1]?.children[0]?.data || domNode.children[3]?.children[0]?.data
                    // console.log(domNode.children[2]?.children && domNode.children[2]?.children[0].data)
                    // console.log(domNode)
                    return (
                      <figure className="gallery-item">
                        <Item
                          caption={caption}
                          content={
                            <div className={lightboxImageWrapper}>
                              <a href={src} target="_blank">
                                <img src={src} srcset={srcset} border="0" align="center" />
                              </a>
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
                              <img src={src} srcset={srcset} />
                            </a>
                          )}
                        </Item>
                        {
                          <figcaption id={domNode.attribs?.id} className="wp-caption-text gallery-caption">
                            {caption}
                          </figcaption>
                        }
                      </figure>
                    )
                  } else
                    if (domNode.name && domNode.name.includes("img")) {
                      // console.log(domNode)
                      return (
                        <Item
                          content={
                            <div className={lightboxImageWrapper}>
                              <a href={domNode.attribs["src"]} target="_blank">
                                <img src={domNode.attribs["src"]} />
                              </a>
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
                              <div className={lightboxImage}>
                                <img src={domNode.attribs["src"]} />
                              </div>
                            </a>
                          )}
                        </Item>
                      )
                    }
                }
              })
            }
          </Gallery>

          {/* <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} /> */}

        </div>
      </div>

      {relatedPosts.length > 0 &&
        <div>
          <Section title="related Posts" className={relatedPostsWrapper}>
            <div className={categoriesSectionHeader}>
              <h2>related Posts</h2>
              <span>]</span>
            </div>
            <ul>
              {
                relatedPosts.slice(0, 3).map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article tags={true} path={edge.node} excerpt={true} className={articleFeature} />
                    </li>
                  </Link>

                ))
              }
            </ul>
            <span>[</span>
          </Section>
        </div>
      }

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
    autor {
      autor
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
    language {
      code
    }
  }
  allWpPost (limit: 100) {
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
        language {
          code
        }
      }
    }
  }
}
`
// export const query = graphql`
// query ($id: String) {
//   wpPost(id: {eq: $id}) {
  
//     id
//     categories {
//       nodes {
//         name 
//       }
//     }
//     title
//     content
//     date(formatString: "MMMM D, YYYY")
//     author {
//       node {
//         name
//       }
//     }
//     tags {
//       nodes {
//         name
//       }
//     }
//     excerpt
//     slug
//     translations {
//       tags {
//         nodes {
//           name
//         }
//       }
//     }
//   }
//   allWpPost {
//     edges {
//       node {
//         featuredImage {
//           node {
//             title
//             image {
//               url
//             }
//           }
//         }
//         id
//         categories {
//           nodes {
//             name 
//           }
//         }
//         tags {
//           nodes {
//             name
//           }
//         }
//         title
//         date(formatString: "MMMM D, YYYY")
//         author {
//           node {
//             name
//           }
//         }
//         excerpt
//         uri
//         translations {
//           uri
//         }
//       }
//     }
//   }
// }
// `