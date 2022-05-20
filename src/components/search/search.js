import * as React from 'react'

import {
   search_box
 } from '../layout/layout.module.scss'

export default function Search(props) {

   const handleChange = e => { props.handleSearchData(e.target.value) };

   return (
         <label className={search_box}>
            <div></div>
            <p>Search</p> <div>[<input type="text" onChange={handleChange} placeholder="                                …" />]</div>
         </label>
         // {/* <input type="submit" value="Submit" /> */}

   )
}
