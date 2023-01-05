import React from 'react'

function ServicesBox({ imageUrl, title, content }) {



    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="image-box">
                <img src={imageUrl} className='w-100 h-100 rounded-5' alt="" />
            </div>
            <div className="services-box-info">
                <h5 className='text-center fs-3 my-3'>{title}</h5>
                <p className='text-center m-0'>{content}</p>
            </div>
        </div>
    )
}

export default ServicesBox