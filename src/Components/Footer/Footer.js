import React from 'react'
import footerlogo from '../../Images/footerlogo.png'
import { FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import './style.scss'
import './responsive.scss'


function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
            <div className='logo-img'>
                <img src={footerlogo} alt="" />
            </div>
            <div className='social-media'>
                <span className='instagram'>
                    <FaInstagram/>
                </span>
                <span className='whatsapp'>
                    <FaWhatsapp/>
                </span>
                <span className='telegram'>
                    <FaTelegram/>
                </span>
            </div>
        </div>
        <div className='contacts'>
            <h3 className='contact-title'>Bog'lanish</h3>
            <ul>
                <li>
                    <span className='footer-conact-logo'>
                        <BsFillTelephoneFill/>
                    </span>
                    <p className='contact-option'>+99890 000 00-00</p>
                </li>
                <li>
                    <span className='footer-conact-logo'>
                        <GoLocation/>
                    </span>
                    <p className='contact-option'>O'zbekiston, Samarqand</p>
                </li>
                <li>
                    <span className='footer-conact-logo'>
                        <MdEmail/>
                    </span>
                    <p className='contact-option'>inbox@alhon.uz</p>
                </li>
            </ul>
        </div>
        <div className='about-company'>
            <h3 className='title-company'>
                Biz haqimizda
            </h3>
            <p className='text-about'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
            </p>
        </div>
    </div>
  )
}

export default Footer