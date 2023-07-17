import React, {useEffect} from 'react'
import "./Home.scss"
import './home.css'
import video from '../Media/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListOl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
      <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">

          <div className="textDiv">
            <span data-aos='fade-up' className="smallText">
              our packages
            </span>
            <h1  data-aos='fade-up' className="homeTitle">Search your Holiday</h1>
          </div>

        <div data-aos='fade-up' className="cardDiv grid">
          <div className="destinationIput">
            <label htmlFor="city"> search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateIput">
            <label htmlFor="date">
              select your date
            </label>
            <div className="input flex">
              <input type="date"  />
            </div>
          </div>
          
          <div className="priceIput">
            <div className="label_total flex">
              <label htmlFor="price">max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter  className="icon"/>
            <span>MORE FILTER</span>
          </div>
      </div>

      <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListOl className="icon"/>
            <TbApps className="icon"/>
          </div>
      </div>

    </div>
  </section>
  )
}

export default Home;
