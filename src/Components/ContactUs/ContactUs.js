import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { BsClockFill } from 'react-icons/bs'
import { ToastContainer , toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import './style.scss'
import './responsive.scss'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import FormData from 'form-data'


function ContactUs() {

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [number,setNumber]=useState('')
    const [text,setText]=useState('')

    let formdata = new FormData();

    formdata.append('name', firstName);
    formdata.append('surname', lastName);
    formdata.append('phone', number);
    formdata.append('message', text)

    async function res(){ 
        let response = await axios.post("https://api.alhon.uz/contacts",formdata)
        if(response.status===201){
            toast.success("So'rovingiz yuborildi", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    function submitFormOnClick(){
        // axios({
        //     method:"POST",
        //     url:`https://api.alhon.uz/contacts`,
        //     headers:{
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     data:{
        //         name:firstName,
        //         surname:lastName,
        //         phone:number,
        //         message:text
        //     }
        // }).then(res=>console.log(res)).catch(err => console.log(err))

        res()

        setFirstName('')
        setLastName('')
        setNumber('')
        setText('')
        
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
                                <input type="text" placeholder='Ismingiz' onChange={(e)=>setFirstName(e.target.value)} value={firstName} required/>
                            </div>
                            <div className='input-fornumber'>
                                <label>Familya</label><br/>
                                <input type="text" placeholder='Familya' onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                            </div>
                        </div>
                        <div className='form-body'>
                            <label>Raqam:</label><br/>
                            <InputMask mask="+\9\9 8(99) 999-99-99" onChange={(e)=>setNumber(e.target.value)} value={number}/><br/>
                            <label>Xabaringiz:</label><br/>
                            <textarea cols="30" rows="10" placeholder='Xabaringiz matni' required onChange={(e) => setText(e.target.value)} value={text}></textarea><br/>
                            <div className='footer-send'>
                                <button type='button' className='btn-send'  onClick={submitFormOnClick}>
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </div>
        <Footer/>
    </>
  )
}

export default ContactUs