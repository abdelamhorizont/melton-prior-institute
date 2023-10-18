import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

import {
   activeTag,
   inactiveTag,
   deleteButton,
   lintonInfo,
   tagListWrapper
} from './tags.module.scss'

export default function Tags(props) {
   const data = useStaticQuery(graphql`
   query {
     allWpTag {
       nodes {
         name
         language {
            code
          }
          translations {
            name
          }
       }
     }
   }  
   `)


   let tags = data.allWpTag.nodes.filter(node =>
      node.language.code == "EN"
   )

   let linton = tags.filter(node => node?.name == "Linton Archive")[0]
   
   tags = tags.filter(node => node?.name !== "Linton Archive")
   tags.unshift(linton)

   const [selectedTags, setSelectedTags] = useState([])

   const handleTag = (e) => {
      setSelectedTags([...selectedTags, e.target.value])
      props.handleTags(e.target.value.toLowerCase())
   };

   const deleteTag = (e) => {
      setSelectedTags(() => selectedTags.filter(tag => tag !== e.target.value))
      props.deleteTags(e.target.value.toLowerCase())
   };

   return (
      <div>
         <h2>Tags</h2>
         <div className={tagListWrapper}>
            <ul>
               {
                  tags.map(node => (
                     <li key={node?.id} value={node?.name}>
                        <button className={selectedTags.includes(node?.name) ? activeTag : inactiveTag} value={node?.name} onClick={e => handleTag(e)}>
                           {node?.name}
                        </button>
                        {selectedTags.includes(node?.name) &&
                           <button className={deleteButton} value={node?.name} onClick={deleteTag}>x</button>
                        }
                        {node?.name.includes('Linton') &&
                           <Link to="../../meta/about#linton">
                              <button className={lintonInfo} value="">i</button>
                           </Link>
                        }
                     </li>
                  ))
               }
            </ul>
         </div>

      </div>
   )
}

