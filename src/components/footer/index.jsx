import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <section id='footer' className='footer'>
            <div className='container text-end'>
                <div class="col-sm-12">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <input type="text" name="search" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
