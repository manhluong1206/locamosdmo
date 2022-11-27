import React, { useState } from 'react'
import './index.scss'
import Popup from '../Popup';
import Category from '../Category';


export default function Redeem() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(prevState => !prevState);
    }
    return (
        <section id="redeem" className="redeem">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="redeem__grid">
                            <div className="redeem__item">
                                <div className="redeem__item img">
                                    <img src={require('../../assets/images/caro.svg').default} onClick={togglePopup} />
                                </div>
                                <div className="redeem__item title">
                                    <h3>Chess Caro</h3>
                                </div>
                                <div className="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>

                            </div>
                        </div>
                        <div className="redeem__grid">
                            <div class="redeem__item">
                                <div class="redeem__item img">
                                    <img src={require('../../assets/images/chichbongbong.svg').default} onClick={togglePopup} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Bubbles</h3>
                                </div>
                                <div class="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="redeem__grid">
                            <div class="redeem__item">
                                <div class="redeem__item img">
                                    <img src={require('../../assets/images/flapbird.svg').default} onClick={togglePopup} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Flap Bird</h3>
                                </div>
                                <div class="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>
                            </div>
                        </div>
                        <div class="redeem__grid">
                            <div class="redeem__item">
                                <div class="redeem__item img">
                                    <img src={require('../../assets/images/goldegg.svg').default} onClick={togglePopup} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Gold Egg</h3>
                                </div>
                                <div class="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 d-flex justify-content-center align-items-center text-center">
                        <div class="pagination">
                            <a href="#" class="pagination__prev">
                                <i class="fas fa-caret-left"></i>
                            </a>
                            <a href="#" class="pagination active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">...</a>
                            <a href="#" class="pagination__next">
                                <i class="fas fa-caret-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {showPopup ?
                    <div className='text-left'>
                        <Popup closePopup={togglePopup} />
                    </div>

                    : null
                }
                <Category />

            </div>
        </section>
    )
}
