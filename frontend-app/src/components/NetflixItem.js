import React, { Component } from 'react';
import instance from '../axios';

class NetflixItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }}

  componentDidMount() {
    instance.get('/netflix')
      .then(res => {
        // console.log(res.data);
        this.setState({ item: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }