import React from 'react'
import './ecomm.css'
import logo from './logo.jpeg'

import IT1 from './IM1.jpeg'
import IT2 from './IM2.jpeg'
import IT3 from './IM3.jpeg'
import IT4 from './IM4.jpeg'
// var item=[
//     {name:'Item1',price:'50'},
//     {name:'Item2',price:'75'},
//     {name:'Item3',price:'100'},     
// ]
const Home = () => {
  return (
    <div>
        <div className="nav">
          <left>  <img src={logo}alt='' className='logo'/></left>
           <left><a href="#">Home</a></left> 
            <center><a href="#">About</a></center> 
            <a href="#">Contact</a> 
           
            
      <right><input type="text" placeholder="Search products..." className="search-bar" /></right>
    
            
        </div>
        <center>
            <h1 clsssName='head'>GR SHOPPEE</h1>
        </center>
        <div className="items">    
            <div className="cart">
                <img className='img' src={IT1}></img>
               <center> <h3>DELL Laptop</h3></center>
                <center><p>latest Processor , 128 gb RAM </p>
                <p>Price:45000</p></center>
                <div className='one'>  
                    <button className='m'>white</button>
                    <button className='m'>black</button>
                    <button className='m'>grey</button>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="cart">
                <img className='img' src={IT2}></img>
                <h3>IQOO Z6 5G </h3>
               <center> <p>64gb Storage ,128 gb RAM</p></center>
                <p>Price:27000</p>
                <div className='one'>
                    <button className='m'>black</button>
                    <button className='m'>peach</button>
                    <button className='m'>classic blue</button>
                    
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="cart">
                <img className='img' src={IT3}></img>
                <h3>JBL HEADPHONES</h3>
                <p>High bass , Best sound quality , noise cancellation  </p>
                <p>Price:5000</p>
                <div className='one'>
                    <button className='m'>orange</button>
                    <button className='m'>pink</button>
                    <button className='m'>blue</button>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="cart">
                <img className='img' src={IT4}></img>
                <h3>BOAT AIRPODS</h3>
                <p>Wireless Earbuds ,music time 3 Hours per bud.</p>
                <p>Price:2000</p>
                <div className='one'>
                    <button className='m'>black</button>
                    <button className='m'>grey</button>
                    <button className='m'>white</button>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>    
    </div>
  )
}

export default Home