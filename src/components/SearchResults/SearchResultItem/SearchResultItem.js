import React from 'react';
import parse from 'html-react-parser';
import styles from './SearchResultItem.module.scss';

const searchresultitem = props => {
    let results = null;

    results = props.items.map(item => (
        item = <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
            <article className={styles.ResultItem}>
                <h1 className={styles.ResultTitle}>{item.title}</h1>
                <p className={styles.ResultExcerpt}>{parse(item.excerpt)}...</p>
                <a href={`https://en.wikipedia.org/?curid=${item.id}`}
                    className={styles.ReadMoreButton}
                    target="_blank"
                    rel="noopener noreferrer">Read more</a>
            </article>
        </div>
    ));

    if ( props.initialInfo ) {
        results = <p className={styles.NoResults}>Please type keyword in input and press search button.</p>
    }

    if (!props.initialInfo && !props.loaderVisible && props.items.length === 0 ) {
        results = <p className={styles.NoResults}>We`re sorry :( there are no search results matching your keyword.</p>
    }


    if (props.isError) {
        results = <p className={styles.ErrorDuringFetch}>There was an error :( during fetch of results.</p>
    }

    return results;
};

export default searchresultitem;