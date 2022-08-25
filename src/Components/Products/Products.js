import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Working from './Working'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'
import './style.scss'

function Products(args) {
    const [items,setItems]=useState([
        {
            src: 'https://picsum.photos/id/123/1200/400',
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
          },
          {
            src: 'https://picsum.photos/id/456/1200/400',
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
          },
          {
            src: 'https://picsum.photos/id/678/1200/400',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
    ])
    const [activeIndex, setActiveIndex]=useState(0)
    const [animating,setAnimating]=useState(false)

    function next(){
        if (animating) return;
        const nextIndex = activeIndex === items.length -1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }
    function previous(){
        if(animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }
    function goToIndex(newIndex){
        if(animating) return;
        setActiveIndex(newIndex)
    }

    const slides = items.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={"Logo"} />
                <CarouselCaption
                    captionText={item.altText}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        )
    })

    useEffect(() => {
        document.getElementById("home").classList.remove("selected")
        document.getElementById("company").classList.remove("selected")
        document.getElementById("products").classList.add("selected")
        document.getElementById("contact").classList.remove("selected")
    },[])
  return (
    <>
        <Header/>
        <div className='box-products'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 swipe-item'>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            {...args}
                        >
                            <CarouselIndicators
                                items={items}
                                activeIndex
                                onClickHandler={goToIndex}
                            />
                            {slides}
                            <CarouselControl
                                direction='prev'
                                directionText='Prev'
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction='next'
                                directionText='Next'
                                onClickHandler={next}
                            />
                        </Carousel>
                    </div>
                    <div className="col-md-12">
                        <Working/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Products