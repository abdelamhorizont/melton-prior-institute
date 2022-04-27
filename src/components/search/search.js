import * as React from 'react'
import { useState } from 'react';

export default function Search(props) {

    const handleChange = e => {props.handleSearchData(e.target.value)};
  
   return (
      <div>
      <label>
        search [<input type="text" onChange={handleChange} />]
      </label>
      <input type="submit" value="Submit" />
      </div>
   )
}

// import * as React from 'react'
// import { useState } from 'react';

// export default function Search({searchValue}) {
//    const [searchField, setSearchField] = useState("");
   
//    const handleSubmit = (txt) => {
//       searchValue.onChange(txt);
//    }

//     const handleChange = e => {
//       setSearchField(e.target.value, handleSubmit);
//       searchValue(searchField)
//     };
  
//    return (
//       <div>
//       <label>
//         search [<input type="text" onChange={handleChange} />]
//       </label>
//       <input type="submit" value="Submit" />
//       </div>
//    )
// }