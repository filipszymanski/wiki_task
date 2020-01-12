import React from 'react'

const search = props => {
    return (
        <div className='FormControl col-md-10 col-lg-8 noPadding'>
            <span className='icon search'></span>
            <input
                className='col-sm-12 col-lg-6'
                placeholder="Search for keyword"
                onChange={ props.searchInputChanged }
            />
            <button className='col-sm-12 col-lg-3' onClick={ props.search } disabled={ !props.searchQuery }>Search</button>
        </div>
    )
}

export default search;