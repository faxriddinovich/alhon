import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { BsClockFill } from 'react-icons/bs'
import InputMask from 'react-input-mask'
import './style.scss'
import './responsive.scss'

function ContactUs() {

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [number,setNumber]=useState('')
    const [text,setText]=useState('')
    const [object,setObject]=useState('')

    function submitForm(event){
        event.preventDefault()
    }

    function submitFormOnClick(){
        setObject({firstName,lastName,number,text})
        setFirstName('')
        setLastName('')
        setNumber('')
        setText('')
        console.log(object)
    }

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
                                <li>email: alhonuz@gmail.com</li>
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
                                <li>Samarqand shahar,Rudakiy ko'chasi</li>
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
                                <li>8:00 dan 17:00 gacha</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='forms'>
                    <form id={'contact-form'} method={"GET"}>
                        <div className='form-header'>
                            <div className='input-forname'>
                                <label>Ismingiz:</label><br/>
                                <input type="text" placeholder='Ismingiz' onChange={(e)=>setFirstName(e.target.value)} required/>
                            </div>
                            <div className='input-fornumber'>
                                <label>Familya</label><br/>
                                <input type="text" placeholder='Familya' onChange={(e)=>setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className='form-body'>
                            <label>Raqam:</label><br/>
                            <InputMask mask="+\9\9 8(99) 999-99-99" onChange={(e)=>setNumber(e.target.value)}/><br/>
                            <label>Xabaringiz:</label><br/>
                            <textarea cols="30" rows="10" placeholder='Xabaringiz matni' required onChange={(e) => setText(e.target.value)}></textarea><br/>
                            <div className='footer-send'>
                                <button type='submit' className='btn-send' onSubmit={submitForm} onClick={submitFormOnClick}>
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