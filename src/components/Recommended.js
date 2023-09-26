import React from 'react';

const Recommended = (props) => {
console.log(props)
const imageBaseUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/';
    const {name,price,description,imageId} = props.itemcard;
    return (
        <div className='recommended-item'>
             <div className='section-left'>
                <p><strong>{name}</strong></p>
                <span>Rupee - {price / 100}</span>
                <p>{description}</p>
             </div>
             <div className='section-right'>
                <img src={imageBaseUrl + imageId} />
             </div>
        </div>
    )
}

export default Recommended;