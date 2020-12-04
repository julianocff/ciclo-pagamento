import React from 'react'
import Menu from './menu'

export default props => {
    return (
        <div>
            <aside className='main-sidebar'>
                <section className='sidebar'>
                    <Menu />
                </section>
            </aside>
        </div>
    )
}