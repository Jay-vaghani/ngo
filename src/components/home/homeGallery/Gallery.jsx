import React from 'react'

function Gallery({ imageUrl }) {
    return (
        <div className="col-sm-6 col-lg-4">
            <img src={imageUrl} className="w-100 h-100 rounded-5" alt="" />
        </div>
    )
}

export default Gallery