import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { ImClipboard } from 'react-icons/im'
import { FaTshirt } from 'react-icons/fa'
import { BsBoxArrowUp } from 'react-icons/bs'
import { TbCar } from 'react-icons/tb'
import './responsive.scss'

function Working() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='title-working'>Biz qanday ishlaymiz</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 box-working'>
                
                <div className='process'>
                    <div className='process-icons'>
                        <div className='icon-working'>
                            <ImClipboard/>
                        </div>
                        <div className='icon-right'>
                            <BsArrowRight/>
                        </div>
                    </div>
                    <div className='process-footer'>
                        <h4>Buyurtmani qabul qilamiz</h4>
                    </div>
                </div>

                <div className='process'>
                    <div className='process-icons'>
                        <div className='icon-working'>
                            <FaTshirt/>
                        </div>
                        <div className='icon-right'>
                            <BsArrowRight/>
                        </div>
                    </div>
                    <div className='process-footer'>
                        <h4>Ishlab chiqaramiz</h4>
                    </div>
                </div> 
                
                <div className='process'>
                    <div className='process-icons'>
                        <div className='icon-working'>
                            <BsBoxArrowUp/>
                        </div>
                        <div className='icon-right'>
                            <BsArrowRight/>
                        </div>
                    </div>
                    <div className='process-footer'>
                        <h4>Yuklaymiz</h4>
                    </div>
                </div>
                
                <div className='process'>
                    <div className='process-icons'>
                        <div className='icon-working'>
                            <TbCar/>
                        </div>
                    </div>
                    <div className='process-footer'>
                        <h4>Yetkazamiz</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Working