import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className = 'profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                        alt=""/>
                        <div className="profileScreen__details">
                            <h2>{user.email}</h2>
                            <div className="profileScreen__plans">
                                <h3>Plans (Current Plan: premium)</h3>
                                <h4>Renewal date: 15/04/2021</h4>
                                <div className="profileScreen__subscribe">
                                    <div className="subscribe__details">
                                        <div className="subscribe__detailsWithin">
                                            <h5>Netflix Standard</h5> 
                                            <h5>1080p</h5>
                                        </div>
                                        <button>Subscribe</button>
                                    </div>
                                    <div className="subscribe__details">
                                        <div className="subscribe__detailsWithin">
                                            <h5>Netflix Basic</h5> 
                                            <h5>480p</h5>
                                        </div>
                                        <button>Subscribe</button>
                                    </div>
                                    <div className="subscribe__details">
                                        <div className="subscribe__detailsWithin">
                                            <h5>Netflix Premium</h5> 
                                            <h5>4K+HDR</h5>
                                        </div>
                                        <div className="current__package">
                                            <button>Current Package</button>
                                        </div>
                    
                                    </div>
                                </div>
                                <button 
                                    onClick = {() => auth.signOut()}
                                    className = 'profileScreen__signOut'>Sign Out</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
