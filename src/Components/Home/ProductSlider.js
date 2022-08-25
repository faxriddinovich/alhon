import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import {product} from '../../MockData/MockData'

function ProductSlider() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
              <h1 className='product-title'>Jahon talabidagi mahsulotlar</h1>
            </div>
            <div className='col-md-12'>
                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode,Navigation,Pagination,Scrollbar,A11y]}
                    className='product-swiper'
                    breakpoints={{
                      0:{
                        slidesPerView:1,
                        spaceBetween:5,
                      },
                      480:{
                        slidesPerView:2,
                        spaceBetween:15,
                      },
                      768:{
                        slidesPerView:3,
                        spaceBetween:15,
                      },
                      1024:{
                        slidesPerView:4,
                        spaceBetween:15,
                      },
                      1280:{
                        slidesPerView:5,
                        spaceBetween:20,
                      }
                    }}
                >
                  {product.map(item=><SwiperSlide key={item.id} className={"swiperslide"}>
                      <div className='box'>
                        <img src={item.img} alt="Product" />
                        <div className='product-title'>
                          <h4>{item.category}</h4>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )}     
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default ProductSlider