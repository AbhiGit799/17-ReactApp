
import React, { Component } from 'react'
import wrapper from './Wrapper'

class About extends Component {
  render() {
    return (
      <>
        <h2>About Component</h2>
        <h2>Company Name : {this.props.companyName}</h2>
        
        <p>Developer Name = {this.props.developerName}</p>
        <p>Experience = {this.props.exp}</p>
        <p>Age = {this.props.age}</p>
      </>
    )
  }
}

export default wrapper(About);



