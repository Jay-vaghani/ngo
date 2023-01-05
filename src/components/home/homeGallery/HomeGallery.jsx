import React from 'react'
import Gallery from './Gallery'

function HomeGallery() {
    return (
        <div className='section-gap'>
            <h2 className='text-center mb-5'>Gallery</h2>
            <div className="container-fluid">
                <div className="row g-3">
                    <Gallery
                        imageUrl="https://image3.jdomni.in/banner/25012018/B7/0B/D6/3FDE142912D68A710AD4DAA931_1516863143824.jpg?output-format=webp"
                    />
                    <Gallery
                        imageUrl="https://image2.jdomni.in/banner/25012018/E3/4A/79/5BBB35E43B1C3E9413179B058B_1516863164072.jpg?output-format=webp"
                    />
                    <Gallery
                        imageUrl="https://image3.jdomni.in/banner/25012018/53/AD/AC/F159E3FE3FEBE91A5562EAD876_1516863125198.jpg?output-format=webp"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeGallery