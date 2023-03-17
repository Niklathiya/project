import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Modal from './pages/Modal'
import Top from './pages/Top'

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Modal/>
                {props.children}
            <Footer />
            <Top/>
        </div>
    )
}

export default Layout
