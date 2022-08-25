import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './style.scss'
import './responsive.scss'
import photoabout from '../../Images/photoaboutcompany.webp'

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
                <img src={photoabout} alt="" />
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                and going through the cites of the word in classical literature, discovered the undoubtable source. 
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </div>
            <div className='location'>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab77c201148d2ea0c1c19dfe455461a657709a78ffb2a17538e3fa880fa436ff0&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Company