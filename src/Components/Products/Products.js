import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Working from './Working'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'
import './style.scss'
import ProductList from './ProductList'
import photo1 from '../../Images/photo1.jpg'
import photo2 from '../../Images/photo2.jpg'
import photo3 from '../../Images/photo3.jpg'
import { getPhotoSlides } from '../../Requests/Request'

function Products(args) {
    const [items,setItems]=useState([])

    async function getPhotos(){
        const data = await getPhotoSlides()
        setItems(data.data)
    }

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
                key={item.image}
            >
                <img src={item.image} alt={"Logo"} className='carousel-img' />
                <CarouselCaption
                    // captionText={item.title}
                    captionHeader={item.title}
                />
            </CarouselItem>
        )
    })

    useEffect(() => {
        getPhotos()
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
                    <div className='col-md-12'>
                        <ProductList/>
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