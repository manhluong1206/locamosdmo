import React from 'react'
import './index.scss'

export default function Popup(props) {
    return (
        <section id='popup' className='popup'>
            <div className='container'>
                <div className='row'>
                    <div className='popup'>
                        <div className='popup_inner'>
                            <span onClick={props.closePopup}>x</span>
                            <div className='img d-flex justify-content-center align-content-center'>
                                <img src={require('../../assets/images/banner-popup.svg').default} />
                            </div>
                            <div className='row title d-flex justify-content-center align-items-center text-center'>
                                <h1 className='text-light fs-4'>Pasukan Tentara</h1>
                                <p>This game is very fun telling the story of a wise prince. this game is 3d and very visualization </p>
                                <div classname="modal-content-block__btn">
                                    <button>Play now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
