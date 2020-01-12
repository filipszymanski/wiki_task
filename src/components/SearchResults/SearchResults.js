import React from 'react';
import styles from './SearchResults.module.scss'
import SearchResultItem from './SearchResultItem/SearchResultItem'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const searchresults = props => {
    return (
        <div className={styles.SearchResults}>
            <LoadingSpinner loaderVisible={props.loaderVisible} />
            <div className='row'>
                <SearchResultItem items={props.searchresults} searchQuery={props.searchQuery} loaderVisible={props.loaderVisible} isError={props.isError} initialInfo={props.initialInfo} />
            </div>
        </div>
    )
}

export default searchresults;