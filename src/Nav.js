import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useHistory } from 'react-router-dom';

function Nav() {

    const [show, handleShow] = useState(false)
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                    onClick = {() => history.push('/')} 
                    className = "nav__logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt=""/>
                <img
                    onClick = {() => history.push('/profile')} 
                    className = "nav__avatar" 
                    src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" 
                    alt=""/>   
            </div>
            
        </div>

    )
}

export default Nav