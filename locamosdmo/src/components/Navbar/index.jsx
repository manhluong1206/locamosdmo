import React from 'react'

export default function Navbar() {
    return (
        <section id="navbar" className='navbar'>
            <div className='container'>
                <div class="header">
                    <div class="row">
                        <div class="col">
                            <div class="header__logo">
                                <img src={require('../../assets/images/logo-text.svg').default} className="w-100" />
                                {/* <img src="./images/logo-text.svg" /> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="header__notify">
                                <button>
                                    <img src={require('../../assets/images/notification.svg').default} className="w-100" />
                                    {/* <img src="../../assets/images/notification.svg" alt="" /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
