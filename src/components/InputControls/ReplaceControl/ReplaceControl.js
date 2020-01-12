import React from 'react'

const replace = props => {
    return (
        <div className='FormControl col-md-10 col-lg-8 noPadding'>
            <span className='icon replace'></span>
            <input
                className='col-sm-12 col-lg-6'
                disabled={ props.searchQuery && props.searchResults.length > 0 ? '' : 'disabled' }
                placeholder="Replace result/s with keyword"
                onChange={ props.replaceInputChanged }
            />
            <button onClick={ props.replace }
                disabled={ props.searchQuery && props.searchResults.length > 0 ? '' : 'disabled' }
                className='col-sm-12 col-lg-3'>
                Replace first result
            </button>
            <button onClick={ props.replaceall }
                disabled={ props.searchQuery && props.searchResults.length > 0 ? '' : 'disabled' }
                className='col-sm-12 col-lg-3'>
                Replace all
            </button>
        </div>
    )
}

export default replace;