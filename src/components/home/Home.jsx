import React from 'react'
import HomeAboutUs from './homeAboutUs/HomeAboutUs'
import HomeContactUs from './homeContactUs/HomeContactUs'
import HomeGallery from './homeGallery/HomeGallery'
import HomeServices from './homeServices/HomeServices'

function Home() {
    return (
        <div>
            <HomeServices />
            <HomeAboutUs />
            <HomeGallery />
            <HomeContactUs />
        </div>
    )
}

export default Home