import React from 'react';
import Pic from './Pic';

const PicList = ({images}) => {
    return ( 
        <div className="col-12 p-5 row">
            {images.map( pic => (
                 <Pic 
                    key={pic.id}
                    pic={pic}
                 />
            ))}
        </div>
     );
}
 
export default PicList;