import React, { Component } from 'react'
import Logo from './Logo';
import Item from './Item';
import Seling from './Seling';
import Naav from './Naav';
export default class Home extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
      <Logo/>
      <Item/>
      <Seling/>
      </div>
    )
  }
}
