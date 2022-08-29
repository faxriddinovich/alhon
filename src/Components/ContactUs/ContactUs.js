import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { BsClockFill } from 'react-icons/bs'
import './style.scss'
import './responsive.scss'

function ContactUs() {
    useEffect(()=>{
        document.getElementById("home").classList.remove("selected")
        document.getElementById("company").classList.remove("selected")
        document.getElementById("products").classList.remove("selected")
        document.getElementById("contact").classList.add("selected")
    },[])
    return (
    <>
        <Header/>
        <div className='contact-box'>
            <h1>Biz bilan bog'lanish</h1>
            <div className='main-box'>
                <div className='box-header'>
                    <div className='option-contact'>
                        <div className='type-contact'>
                            <span>
                                <BsFillTelephoneFill/>
                            </span>
                            <h4>Raqamlar</h4>
                        </div>
                        <div className='more'>
                            <ul>
                                <li>+99866 230 00-32</li>
                                <li>+99894 067 00-32</li>
                            </ul>
                        </div>
                    </div>

                    <div className='option-contact'>
                        <div className='type-contact'>
                            <span>
                                <GrMail/>
                            </span>
                            <h4>Xabarlar</h4>
                        </div>
                        <div className='more'>
                            <ul>
                                <li>email: inbox@alhon.uz</li>
                                <li>telegram: @alhonuz</li>
                            </ul>
                        </div>
                    </div>

                    <div className='option-contact'>
                        <div className='type-contact'>
                            <span>
                                <GoLocation/>
                            </span>
                            <h4>Joylashuv</h4>
                        </div>
                        <div className='more'>
                            <ul>
                                <li>Samarqand shahar,Registon ko'chasi,44-uy</li>
                            </ul>
                        </div>
                    </div>

                    <div className='option-contact'>
                        <div className='type-contact'>
                            <span>
                                <BsClockFill/>
                            </span>
                            <h4>Ish vaqti</h4>
                        </div>
                        <div className='more'>
                            <ul>
                                <li>09:00 dan 20:00 gacha</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='forms'>
                    <form>
                        <div className='form-header'>
                            <div className='input-forname'>
                                <label>Ismingiz:</label><br/>
                                <input type="text" placeholder='Ismingiz' required/>
                            </div>
                            <div className='input-fornumber'>
                                <label>Raqamingiz</label><br/>
                                <input type="text" required/>
                            </div>
                        </div>
                        <div className='form-body'>
                            <label>Email:</label><br/>
                            <input type="email" placeholder='Email' /><br/>
                            <label>Xabaringiz:</label><br/>
                            <textarea cols="30" rows="10" placeholder='Xabaringiz matni' required></textarea><br/>
                            <div className='footer-send'>
                                <button type='button' className='btn-send'>
                                    Yuborish
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='about-connect'>
                        <p>Siz biz bilan oz'ingizga qulay bo'lagan istalgan usul orqali bog'lanishingiz mumkin.Bizning telefon raqamlarimiz hamda elektron maznillarimiz mavjud.
                            Shu bilan bir qatorda siz yuqoridagi formani to'ldirib murojaat qilishingiz mumkin
                        </p>
                        <p>
                            Bizga o'zingizni qiziqtirgan savollarni berishingiz mumkin.Biz bu murojaatlarni ko'rib chiqishdan xursand bo'lamiz
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ContactUs