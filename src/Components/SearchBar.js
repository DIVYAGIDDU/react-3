import React from 'react';
function SearchBar({placeholder,data}){
    return(
        <div className="Search">
        <div className='searchinputs'>
        <input type="text" placeholder={placeholder} />
        <div className='searcIcon'></div>
        </div>
        <div className='dataresult'></div>
        </div>
        
    )
}
export default SearchBar