import React from 'react'
import PremMandir from './Images/PremMandir.webp'
import Kedarnath from './Images/Kedarnath.jpg'
import Badrinath from './Images/badrinath-dham1.jpg'
import RamMandir from './Images/Ram_Janmbhoomi.jpg'
import Rameshwaram from './Images/Rameshwaram.jpg'
import Adiyogi from './Images/Adiyogi.jpg'
import VaishnoDevi from './Images/Vaishnodevi.png'
import Kashi from "./Images/Kashi.jpg"

const temples = [
  { id: 1, name: "Prem Mandir", image: PremMandir ,location :"Prem Mandir, Vrindavan, Sri Kripalu Maharaj Ji Marg, Raman Reiti, Vrindavan, Rajpur Khadar, Uttar Pradesh 281121"
  },
  { id: 2, name: "Kedarnath Dham", image: Kedarnath , location :"Shri Kedarnath Jyotirlinga Temple, Kedarnath, Uttarakhand 246445"},
  { id: 3, name: "Badrinath Dham", image: Badrinath , location :"Badrinath, Uttarakhand 246422"},
  { id: 4, name: "Rameshwaram", image: Rameshwaram , location :"SHREE RAMESHWARAM JYOTIRLINGA SHIVAM TEMPLE, OLLIKADU LAKE ROAD, SAMBAI VILLAGE, MANGADU, Rameswaram, Tamil Nadu 623526"},
  { id: 5, name: "Ram Mandir", image: RamMandir , location :"Q5WW+GGR Ram janm Bhoomi, Sai Nagar, Ayodhya, Uttar Pradesh 224123"},
  { id: 6, name: "Kashi Vishwanath", image: Kashi , location :"Shri Kashi Vishwanath Temple, Lahori Tola, Varanasi, Domari, Uttar Pradesh 221001"},
  { id: 7, name: "Adiyogi", image: Adiyogi , location :"Adiyogi Shiva Statue Chikkaballapur, FPP4+HQW, Avalagurki, Karnataka 562101"},
  { id: 8, name: "Vaishnodevi Dham", image: VaishnoDevi , location :"Vaishno Devi, Bhavan, Katra, Jammu and Kashmir 182301"}
];
const Temples = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {temples.map((temple, index) => (
            <div key={temple.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
              <img src={temple.image} className="d-block w-100 slidingImages" alt={temple.name} title={temple.name} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container-fluid mt-5 ">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {temples.map((temple, index) => (
              <div className='col-md-3 m-3'>
                <div className="card cardd" >
                  <img src={temple.image} className="card-img-top cardImages" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{temple.name}</h5>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.location)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Direction
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Temples
