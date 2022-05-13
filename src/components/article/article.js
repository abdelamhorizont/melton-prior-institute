import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ArticleTitle from '../../components/articleTitle/articleTitle'

import {
   article
} from './article.module.scss'


const Article = (props) => {

   return (
      <div className={article}>
         {
            props.path.featuredImage && props.path.featuredImage.node.localFile && props.path.featuredImage.node.localFile.childImageSharp ?
               <GatsbyImage image={props.path.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="test" /> :
               props.path.featuredImage && props.path.featuredImage.node.image &&
               <img src={props.path.featuredImage.node.image.url} alt="test" />
         }
         <ArticleTitle path={props.path} />
         {props.excerpt &&
            <>
               <p dangerouslySetInnerHTML={{ __html: props.path.excerpt }} />
               { props.path.tags &&
                  props.path.tags.nodes.map(node => (
                     <h4>[{node.name}]</h4>
                  ))
               }  
            </>
      }
      </div>
   )
}

export default Article