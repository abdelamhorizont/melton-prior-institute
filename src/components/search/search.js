import * as React from 'react'

import {
   searchBox
 } from '../layout/layout.module.scss'

export default function Search(props) {

   const handleChange = e => { props.handleSearchData(e.target.value) };

   return (
         <label className={searchBox}>
            <p>Search</p> <div>[<input type="text" onChange={handleChange} placeholder="-O" />]</div>
         </label>
         // {/* <input type="submit" value="Submit" /> */}

   )
}
