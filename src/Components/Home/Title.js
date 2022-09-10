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
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  )
}

export default Title