import React from 'react'
import footerlogo from '../../Images/footerlogo.png'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
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
                    <a href="https://www.instagram.com/alhon.uz" target={'_blank'}>
                        <FaInstagram/>
                    </a>
                </span>
                <span className='whatsapp'>
                    <a href="https://www.facebook.com/" target={'_blank'}>
                        <FaFacebook/>
                    </a>
                </span>
                <span className='telegram'>
                    <a href="https://T.me/alhonuz" target={'_blank'}>
                        <FaTelegram/>
                    </a>
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
                    <p className='contact-option'>+99866 230 00-32</p>
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
                    <p className='contact-option'>alhonuz@gmail.com</p>
                </li>
            </ul>
        </div>
        <div className='about-company'>
            <h3 className='title-company'>
                Biz haqimizda
            </h3>
            <p className='text-about'>
                «ZIYO FAYZ NON» oilaviy korxonasi 2017-yili O’zbekiston Respublikasi Samarqand viloyati Samarqand shahrida tashkil topdi. 
                «ZIYO FAYZ NON» oilaviy korxonasi o’zining “ALHON” brendi ostida textile ishlarini amalga oshirmoqda. 
                Korxonamiz mahalliy qonunlar va qoidalarga rioya qilib keladi.
            </p>
        </div>
    </div>
  )
}

export default Footer