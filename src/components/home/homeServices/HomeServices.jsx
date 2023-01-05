import React from 'react'
import ServicesBox from './ServicesBox'

function HomeServices() {

  

  return (
    <div className='section-gap'>
      <h2 className='text-center fs-1 mb-5'>Our Causes</h2>
      <div className="container-fluid overflow-hidden">
        <div className="row justify-content-center align-item-center g-5 ">
          <ServicesBox
            imageUrl="https://image3.jdomni.in/banner/26092019/4B/C1/C9/A8D7287D45D7D574893BC442CD_1569502060564.jpg?output-format=webp"
            title="Animal Rescue"
            content="We are engaged in rescuing disowned, orphaned or sick and needy animals."
          />
          <ServicesBox
            imageUrl="https://image3.jdomni.in/banner/25012018/98/03/23/62A6D06D7A06546DA4EEB55BFE_1516864418169.jpg?output-format=webp"
            title="Animal Feeding"
            content="We aim to provide good and nutritional food to the starving animals from the streets."
          />
          <ServicesBox
            imageUrl="https://image2.jdomni.in/banner/25012018/7B/56/DA/3F17572B704620C734B76AB157_1516864112657.png?output-format=webp"
            title="Animal Adoption"
            content="Take home your bundle of happiness in the form of a pet and indulge in the most pure act of adoption"
          />
          <ServicesBox
            imageUrl="https://image3.jdomni.in/banner/25012018/D3/5F/C9/FD8912E8F4120882F2E41D94BF_1516863616693.jpg?output-format=webp"
            title="Animal Boarding"
            content="Never run out of a place to manage your pet while you are on a vacation as we provide the best pet boarding service."
          />
        </div>
      </div>
    </div>
  )
}

export default HomeServices