import React from 'react'
import '../Redeem/index.scss'

export default function Redeem() {
    return (
        <section id="redeem" className="redeem">
            <div class="container d-flex justify-content-center">
                <div class="row">
                    <div class="col">
                        <div class="redeem__grid">
                            <div class="redeem__item">
                                <div class="redeem__item img">
                                    <img src={require('../../assets/images/bg-img.svg').default} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Flower Violet</h3>
                                </div>
                                <div class="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>
                                <div class="modal">
                                    <div class="modal-content">
                                        <span class="close">&times;</span>
                                        <div class="modal-content-block">
                                            <div class="modal-content-block__img">
                                                <img src={require('../../assets/images/banner-popup.svg').default} />
                                            </div>
                                            <div class="modal-content-block__title">
                                                <h3>Pasukan Tentara</h3>
                                            </div>
                                            <div class="modal-content-block__desc">
                                                <p>This game is very fun telling the story of a wise prince. this game is 3d and very visualization </p>
                                            </div>
                                            <div class="modal-content-block__btn">
                                                <button>Play now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="redeem__grid">
                            <div class="redeem__item">
                                <div class="redeem__item img">
                                    <img src={require('../../assets/images/bg-img.svg').default} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Flower Violet</h3>
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
                                    <img src={require('../../assets/images/bg-img.svg').default} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Flower Violet</h3>
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
                                    <img src={require('../../assets/images/bg-img.svg').default} />
                                </div>
                                <div class="redeem__item title">
                                    <h3>Flower Violet</h3>
                                </div>
                                <div class="redeem__item desc">
                                    <img src={require('../../assets/images/primary.svg').default} />
                                    <p>1289 Play times</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
