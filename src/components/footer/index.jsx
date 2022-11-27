import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <section id='footer' className='footer mt-2 pt-2 pb-2'>
            <div className='container'>
                <div className='row text-left'>
                    <span class="icon position-absolute"><i class="fa fa-search"></i></span>
                    <input type="search" id="search" className='text-center'/>
                </div>
            </div>
        </section>
    )
}
