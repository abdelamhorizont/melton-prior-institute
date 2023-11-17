import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

export default function Tags(props) {
   const data = useStaticQuery(graphql`
   query {
     allWpTag {
       nodes {
         name
       }
     }
   }  
   `)

   const tags = data.allWpTag.nodes
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
         <ul>
            {
               tags.map(node => (
                  <li key={node.id}>
                     <button value={node.name} onClick={e => handleTag(e)}>
                        {node.name}
                     </button>
                     {selectedTags.includes(node.name) &&
                        <button value={node.name} onClick={deleteTag}>x</button>
                     }
                  </li>
               ))
            }
         </ul>
      </div>
   )
}

