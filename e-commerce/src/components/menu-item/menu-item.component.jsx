import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size }) => (
    <div className={`${size} menu-item`}>
    
    <div className='background-image' style={{ backgroundImage: `url(${imageURL})` }} />
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div> {/* END content */}
    </div>/* END Menu-item */
);

export default MenuItem;