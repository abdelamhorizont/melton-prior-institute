import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ArticleTitle from '../../components/articleTitle/articleTitle'

import {
   article,
   thumbnail,
   languagesWrapper,
   features,
   pictorials,
   recommended,
   articleBody,
   articleExcerpt,
   articleTagWrapper
} from './article.module.scss'

import {
   articleFeature,
   articlePictorial
 } from '../../components/article/article.module.scss'
 

const Article = (props) => {

   return (
      <div 
      className={props.className ? props.className : { article }} 
   // Hier muss irgendwas geändert werden. In searchResults.js und {wp.Post.uri}.js wird ein ClassName vergeben, dieser kommt im HTML aber als "[object Object]" raus? 
      // className={articleFeature} 
      >
         <div className={thumbnail}>
            {
               props.path.featuredImage && props.path.featuredImage.node.localFile && props.path.featuredImage.node.localFile.childImageSharp ?
                  <GatsbyImage image={props.path.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={"test"} />
                  :
               props.path.featuredImage && props.path.featuredImage.node.image &&
                  <img src={props.path.featuredImage.node.image.url} alt="test" />
            }
         </div>

         <div className={articleBody}>
            <ArticleTitle path={props.path} />

            {props.excerpt &&
               <>
                  <div className={articleExcerpt}>
                     <p dangerouslySetInnerHTML={{ __html: props.path.excerpt }} />
                  </div>
                  <div className={articleTagWrapper}>
                     {props.path.tags && props.path.tags.nodes.length > 0 ?
                        props.path.tags.nodes.map(node => (
                           <h4>[{node.name}]</h4>
                        ))
                        :
                        props.path.translations && props.path.translations[0] && props.path.translations[0].tags &&
                        props.path.translations[0].tags.nodes.map(node => (
                           <h4>[{node.name}]</h4>
                        ))}
                  </div></>
            }
            <div className={languagesWrapper}>
               {props.path.language &&
                  <Link to={`/content${props.path.uri}`}>
                     <button>{props.path.language.code}</button>
                  </Link>
               }
               {props.path.translations &&
                  props.path.translations.map(node =>
                     node.language &&
                     <Link to={`/content${node.uri}`}>
                        <button>{node.language.code}</button>
                     </Link>
                  )
               }
            </div>
         </div>



      </div>
   )
}

export default Article