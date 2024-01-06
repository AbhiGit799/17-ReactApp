import React from 'react'
import wrapper from './Wrapper'

function Contactus(props) {
  return (
    <>
      <h2> Contact Us Component </h2>
      <h3> Company Name : {props.companyName} </h3>

      <p>Developer Name = {props.developerName}</p>
      <p>Mobile Number = {props.mobileNo}</p>
      <p>Age = {props.age}</p>
    </>
  )
}

export default wrapper(Contactus);


