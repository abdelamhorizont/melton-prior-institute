import * as React from 'react'

export default function Search(props) {

   const handleChange = e => { props.handleSearchData(e.target.value) };

   return (
      <div>
         <label>
            search [<input type="text" onChange={handleChange} />]
         </label>
         {/* <input type="submit" value="Submit" /> */}
      </div>
   )
}
