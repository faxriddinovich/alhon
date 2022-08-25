import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss'
import './responsive.scss'
import logoheader from '../../Images/headerlogo.png'
import {CgMenu} from 'react-icons/cg'


function Header() {

    function showMenu(){
        let element=document.getElementById("links")
        element.classList.toggle("show")
    }
    let lastScroll = 0;
    window.addEventListener('scroll',() => {
        const element=document.getElementById("header")
        const currentSroll = window.pageYOffset

        if(currentSroll <= 0){
            element.classList.remove("scroll-up")
        }
        if(currentSroll>lastScroll && !element.classList.contains("scroll-down")){
            element.classList.remove("scroll-up")
            element.classList.add("scroll-down")
        }
        if(currentSroll < lastScroll && element.classList.contains("scroll-down")){
            element.classList.add("scroll-up")
            element.classList.remove("scroll-down")
        }

        lastScroll=currentSroll
    })
  return (
    <>
        <div className='header' id='header'>
            <div className='logo'>
                <img src={logoheader} alt="" />
            </div>
            <ul className='links' id='links'>
                <li>
                    <Link to={'/'} id="home">
                        Bosh sahifa
                    </Link>
                </li>
                <li>
                    <Link to={'/company'} id={"company"}>
                        Kompaniya
                    </Link>
                </li>
                <li>
                    <Link to={'/products'} id={"products"}>
                        Mahsulotlar
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'} id="contact">
                        Biz bilan aloqa
                    </Link>
                </li>
            </ul>
            <button type='button' onClick={showMenu} id='icon'>
                <CgMenu/>
            </button>
        </div>
    </>
  )
}

export default Header