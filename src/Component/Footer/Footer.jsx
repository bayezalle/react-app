import React,{useEffect} from 'react'
import './footer.css'
import './Footer.scss'
import video from '../Media/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


return (
  <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type='video/mp4' ></video>
      </div>

    <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='enter email adress'/>
            <button data-aos='fade-up' className="btn" type='submit'>Send<FiSend className='icon' /></button>
          </div>
        </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="" className="logo flex"><MdTravelExplore className='icon'/>Travel.</a>
          </div>
          <div data-aos='fade-up' className="footerParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores amet voluptatem iure quae pariatur ipsa tempora 
            dolore impedit molestiae aliquam optio eveniet soluta, quis exercitationem aperiam, officia quas mollitia officiis?
          </div>

          <div data-aos='fade-up' className="footerSocials flex">
            <AiOutlineTwitter className="icon"/>
            <BsYoutube  className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon" />
          </div>
        </div>
        <div className="footerLiks grid">
          <div data-aos='fade-up' Date-aos-duration="000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Service
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Insurence
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Tourisme
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Payment
            </li>
          </div>

          <div data-aos='fade-up' Date-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Hosterwold
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Tripadvisor
            </li>
          </div>

          <div data-aos='fade-up' Date-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon" />London
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />California
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon" />Indonesia
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Europ
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>Oceania
            </li>
          </div>
        </div>
        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED ISRATECH 2022</small>
        </div>
      </div>
      </div>
    </section>
  )
}
 
export default Footer
