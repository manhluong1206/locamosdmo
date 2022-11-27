import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <section id='footer' className='footer'>
            <div className='container'>
                <div className='row pl-4 pr-4 text-left'>
                    <span class="icon position-absolute"><i class="fa fa-search"></i></span>
                    <input type="search" id="search" />
                </div>
            </div>
        </section>
    )
}
