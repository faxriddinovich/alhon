import React from 'react'
import './style.scss'
import video from '../../Images/alhonbg.mp4'

function Title() {
  return (
          <div className='home-title'>
              <video autoPlay loop muted playsInline className='background-video'>
               <source src={video} type='video/mp4'/>
              </video>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='big-title'>
                        <h1>Alhon -  bu sizning sifatli mahsulot yetkazib beruvchi hamkoringiz</h1>
                    </div>
                    <div className='text'>
                      <p>
                        “Alhon”firmasi Oila aʼzolaringiz uchun sifatli va qulay narxdagi tekstil mahsulotlarini taqdim etadi. Eksport uchun chiqarilgan sifatli mahsulotlardan uzoq muddat foydalanasiz. “Alhon” tekstil firmasida SIZ xar-hil turdagi kiyim-kechak lar, choyshablarni xaril qilib oʻzingiz va oila aʼzolaringizni xursan qiling!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  )
}

export default Title