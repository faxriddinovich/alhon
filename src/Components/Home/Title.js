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
                      «ZIYO FAYZ NON» oilaviy korxonasi 2017-yili O’zbekiston Respublikasi Samarqand viloyati Samarqand shahrida tashkil topdi. «ZIYO FAYZ NON» oilaviy korxonasi o’zining “ALHON” brendi ostida textile sanoatini ham yurutmoqda. Korxonamiz mahalliy qonunlar va qoidalarga rioya qilish bilan bir qatorda barcha xodimlarga qat’iy global axloq-qoidalarini qo‘llab keladi. "Alhon"tikuv sexi  sifatli mahsulot va ishonchli hamkor bo'lish bilan bir qatorda, o'z oldiga xodimlarini o‘qitishni va kuzatuv tizimlarini boshqarishni maqsad qilgan. Bundab tashqari xozirgi kunda adolatli va shaffof korporativ boshqaruvni amalga oshirib kelmoqda. Xozirgi kunda "Alhon" tikuv sexida 40 yaqin ishchi faoliyat yurutmoqda. Mahsulotlar turi esa 100 dan ortiq. "ALHON" o‘z iste’dodi va texnologiyalarini milliy va global jamiyatni rivojlantirishga hissa qo‘shadigan yuqori darajadagi mahsulotlarni yaratishga bag‘ishlaydi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  )
}

export default Title