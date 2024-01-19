import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle , AiFillAmazonCircle,AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className='home2'>
      <img src={vg} alt='Graphics'/>

      <div>
        <p>
            We are your one and only to the tech problems
            your face
            every day. We are leading tech company whose aim is to 
            insrease the 
            problems solving ability in children.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div><h1>Who we are ?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea temporibus qui 
        numquam sint! Quisquam, recusandae, dolore, hic fugiat 
        facilis consequuntur placeat exercitationem eius asperiores 
        voluptatum magni impedit dolorem ut in.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea temporibus qui 
        numquam sint! Quisquam, recusandae, dolore, hic fugiat 
        facilis consequuntur placeat exercitationem eius asperiores 
        voluptatum magni impedit dolorem ut in.
      </p>
    </div>
    </div>

    <div className="home4 " id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{animationDelay: "0.7s",
        }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{animationDelay: "1s",
        }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
