import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div>
      <div style={{width:'390px', marginTop:'200px', marginLeft:'50px'}}>
        <h3 >We can't seem to find the page you're looking for</h3>
        <dl >
          <dt>Here are some helpful links insted</dt>
          
          <Link to={'/'}>
          <dd><a href="">Home</a></dd>
          </Link>
          <Link to={'/resume-generator'}>
          <dd><a href="">Resume Genarator</a></dd>
          </Link>
        </dl>
      </div>
      <div>
      <img style={{marginLeft:'450px', marginTop:'-350px'}} className='' src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="" />
      </div>
    </div>
  )
}

export default Pagenotfound
