import React from 'react';
import styles from './LoadingSpinner.module.scss';

const spinner = props => {
    let loader = null

    if ( props.loaderVisible ) {
        loader = <div className={ styles.Spinner }><div className={ styles.SpinnerWrapper }><div></div><div></div><div></div><div></div></div></div>
    }

    return loader;
}

export default spinner;