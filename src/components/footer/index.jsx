import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <section id='footer' className='footer'>
            <div className='container'>
                <div className='row pl-4 pr-4'>
                    <div class="box">
                        <div class="container-1">
                            <span class="icon text-left"><i class="fa fa-search"></i></span>
                            <input type="search" id="search"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
