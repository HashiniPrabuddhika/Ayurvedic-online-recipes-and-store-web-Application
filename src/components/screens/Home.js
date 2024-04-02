import React from 'react'
import Card from '../Card1'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Carousel from '../Carousel'




export default function Home() {
    return (
        <div>
            <div><Carousel /></div>
            <div className='m-'>
                <Card /></div>
            <div><Footer /></div>
        </div>
    )
}


