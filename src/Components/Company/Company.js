import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './style.scss'
import './responsive.scss'
import video from '../../Images/alhon.mp4'

function Company() {
  useEffect(() => {
    document.getElementById("home").classList.remove("selected")
    document.getElementById("company").classList.add("selected")
    document.getElementById("products").classList.remove("selected")
    document.getElementById("contact").classList.remove("selected")
  },[])
  return (
    <>
        <Header/>
        <div className='company-box'>
            <h1>Kompaniyamiz haqida</h1>
            <div className='box-company-text'>
                <p>
                  «ZIYO FAYZ NON» oilaviy korxonasi 2017-yili O’zbekiston Respublikasi Samarqand viloyati Samarqand shahrida tashkil topdi. «ZIYO FAYZ NON» oilaviy korxonasi o’zining “ALHON” brendi ostida textile ishlarini amalga oshirmoqda. Korxonamiz mahalliy qonunlar va qoidalarga rioya qilish bilan bir qatorda barcha xodimlarga qat’iy global axloq-qoidalarini qo‘llab keladi. <br/> Dunyodagi eng axloqiy va sifatli kompaniyalardan biri bo‘lish maqsadida o‘z xodimlarini o‘qitishni va kuzatuv tizimlarini boshqarishni amalga oshirgan va davom ettirib kelmoqda, shu bilan birga adolatli va shaffof korporativ boshqaruvni amalga oshiradi. "ALHON" o‘z iste’dodi va texnologiyalarini milliy va global jamiyatni rivojlantirishga hissa qo‘shadigan yuqori darajadagi mahsulotlarni yaratishga bag‘ishlaydi.
                </p>
                <video src={video} controls className='video-content'/>
            </div>
            <div className='location-box'>
              <h1>Joylashuv</h1>
              <div className='location'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afcc6747bcda1e9003489334f3037889fce71f30186c0f0177d2b07cc79925f8b&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Company