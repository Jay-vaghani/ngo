import React from 'react'
import "./homeContact.css"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineEmail } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineClockCircle } from "react-icons/ai"

function HomeContactUs() {
    return (
        <div className='section-gap contact-us'>
            <h2 className='text-center mb-5'>Contact Us</h2>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className='col-sm-6 col-lg-3'>
                        <div className='icon'>
                            <HiOutlineLocationMarker size="3em" className='d-block m-auto text-center' />
                        </div>
                        <h3 className='mt-4'>Our Office Address</h3>
                        <p>
                            Palm Court Bldg M, 501/8, 5th
                            Floor, New Link Road, Beside
                            Goregaon Sports Complex, Malad
                            West, Mumbai, Maharashtra
                            400064
                        </p>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className='icon'>
                            <MdOutlineEmail size="3em" className='d-block m-auto text-center' />
                        </div>
                        <h3 className='mt-4'>General Enquiries</h3>
                        <p><a href="mailto: webmaster@example.com" className='text-decoration-none text-white'>webmaster@example.com</a></p>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className='icon'>
                            <FiPhoneCall size="3em" className='d-block m-auto text-center' />
                        </div>
                        <h3 className='mt-4'>Call Us</h3>
                        <p><a href="tel: 8511810267" className='text-decoration-none text-white'>+91 - 8511810267</a></p>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className='icon'>
                            <AiOutlineClockCircle size="3em" className='d-block m-auto text-center' />
                        </div>
                        <h3 className='mt-4'>Our Timings</h3>
                        <p>Mon-sun: 10:00 AM - 07:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactUs
