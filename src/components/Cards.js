import React from 'react';
import '../Cards.css';

function Cards(props) {
    return(
       <div className=' d-inline-block card'>
           <img className='card-image' src={'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} alt={'Unsplash architecture image'} />
       </div>
    );
}

export default Cards;