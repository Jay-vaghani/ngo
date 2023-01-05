import React, { useEffect, useState } from 'react'
import { useHref } from "react-router-dom"
import NavBar from './navBar/NavBar'
import "./header.css"

function Header() {

  const page = useHref()

  const [title, setTitle] = useState("")

  useEffect(() => {
    if (page === "/") {
      setTitle("TO SAVE BIRDS CONTACT US")
    }
    if (page === "/gallery") {
      setTitle("GALLERY PAGE")
    }
    if (page === "/services") {
      setTitle("OUR CAUSES")
    }
    if (page === "/team") {
      setTitle("OUR TEAM MEMBERS")
    }
    if (page === "/donation") {
      setTitle("THANK YOU FOR YOUR DONATION")
    }
    if (page === "/volunteer") {
      setTitle("THANK YOU FOR YOUR SUPPORT")
    }
    if (page === "/contact-us") {
      setTitle("CONTACT US")
    }
  })


  return (
    <header className='banner'>
      <NavBar />
      
    </header>
  )
}

export default Header