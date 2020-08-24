import React from 'react';

const Pic = ({pic}) => {
    //Destructuring
    const { largeImageURL, likes, previewURL, tags, views } = pic;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
            </div>
        </div>
     );
}
 
export default Pic;