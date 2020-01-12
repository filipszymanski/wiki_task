import React from 'react';
import Aux from '../..//hoc/Auxx';

const layout = props => (
    <Aux>
    <header>
        <a href='localhost:3000'>
            <div className='site-logo' alt='site logo'></div>
        </a>
    </header>
    <main>
        <div className='container'>
        {props.children}
        </div>
    </main>
    </Aux>
);

export default layout;