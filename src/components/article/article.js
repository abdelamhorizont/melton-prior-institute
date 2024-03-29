import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import ArticleTitle from '../../components/articleTitle/articleTitle'

import {
   article,
   // thumbnail,
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
   articlePictorial,
   articleCollection,
   thumbnail
} from '../layout/layout.module.scss'


const Article = (props) => {
   const [category, setCategory] = useState()

   React.useEffect(() => {
      setCategory(
         props.path.categories.nodes.some(node => node?.name.includes("features")) && articleFeature ||
         props.path.categories.nodes.some(node => node?.name.includes("pictorial")) && articlePictorial
      )
   }, [])


   return (
      // <div className={props.className ? props.className : article }> 
      <div className={props.className ? `${props.className} ${category}` : article}>

         <div className={thumbnail}>
            { 
               props.path.featuredImage?.node.image && (
                  <img src={props.path.featuredImage?.node?.image?.url} alt={props.path.featuredImage?.node?.title} />
               )
            }
         </div>

         <div className={articleBody}>
            <ArticleTitle path={props.path} />

            {props.excerpt &&
               <>
                  <div className={articleExcerpt}>
                     <p dangerouslySetInnerHTML={{ __html: props.path.excerpt }} />
                  </div>
               </>
            }

            {props.tags && props.path.tags?.nodes.length > 0 &&
               <div className={articleTagWrapper}>
                  {props.path.tags.nodes.length > 0 ?
                     props.path.tags.nodes.map(node => (
                        <h4>[{node?.name}]</h4>
                     ))
                     :
                     props.path.translations && props.path.translations[0] && props.path.translations[0].tags &&
                     props.path.translations[0].tags.nodes.map(node => (
                        <h4>[{node?.name}]</h4>
                     ))
                  }
               </div>
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