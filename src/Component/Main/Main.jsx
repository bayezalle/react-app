import React,{useEffect} from 'react'
import './Main.scss'
import './main.css'

// import image
import img1 from '../Media/img1.jpeg'
import img2 from '../Media/img2.jpeg'
import img3 from '../Media/img3.jpeg'
import img4 from '../Media/img4.jpeg'
import img5 from '../Media/img5.jpeg'
import img6 from '../Media/img6.jpeg'
import img7 from '../Media/img7.jpeg'
import img8 from '../Media/img8.jpeg'
import img9 from '../Media/img9.jpeg'
// import icon
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
  {
    id: 1,
    imgScr: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgScr: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 3,
    imgScr: img3,
    destTitle: 'Bora Bora',
    location: 'peru',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 4,
    imgScr: img4,
    destTitle: 'Bora Bora',
    location: 'australie',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 5,
    imgScr: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 6,
    imgScr: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 7,
    imgScr: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 8,
    imgScr: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 9,
    imgScr: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the opitome of romance, Bora Borais one of the best travel destination in the wold .this place is know for its luxurious stays and adventurous activities.'
  },

]
const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="main container section">
        <div className="secTitle">
          <h3 data-aos='fade-right'  className="title">
            most visited destinations
          </h3>
        </div>

      <div className="secContent grid">
       {
          Data.map(({id, imgScr, destTitle, location,
            grade, fees, description}) => {

              return(
                <div key={id} data-aos='fade-up' className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgScr}  alt={destTitle} />
                    </div>

                  <div className="cardInfo">
                    <h4 className="destTitle"> {destTitle}</h4>

                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>

                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                    </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>
                    <button className="btn flex">
                      Detais <BsClipboardCheck className="icon" />
                    </button>
                  </div>
                </div>
              )

          })
       }

    </div>
  </section>

  )
}

export default Main
