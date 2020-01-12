import React from 'react'
import SearchControl from './SearchControl/SearchControl';
import ReplaceControl from './ReplaceControl/ReplaceControl';

const inputcontrols = props => (
    <div className="col-sm-12">
        <div className='InputControlsFormWrapper'>
            <form>
                <SearchControl
                    search={ props.clickedsearch }
                    searchQuery={ props.searchQuery }
                    searchInputChanged={ props.searchInputChange }
                />
                <ReplaceControl
                    replace={ props.clickedreplace }
                    replaceall={ props.clickedreplaceall }
                    replaceInputChanged={ props.replaceInputChange }
                    searchQuery={ props.searchQuery }
                    searchResults={ props.searchResults }
                />
            </form>
        </div>
    </div>
)

export default inputcontrols;