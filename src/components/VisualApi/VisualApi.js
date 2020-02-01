import React, { Component } from 'react';
import Form from '../Form';
import './VisualApi.css';
import RepoGitHub from '../RepoGitHub'


export default class VisualApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: ''
    };
    this.onGetLogin = (login) => {
      this.setState({
        login
      })
    }
  }
  render(){

    const { login } = this.state;

    const repoGitHub = login !== '' ? 
          <RepoGitHub login={this.state.login}/> :
          null;
    return (
      <div className="visual-api">
        <h1>Visual API</h1>
        <Form onAddData={this.onGetLogin}
              placeholder='Enter any github profile'/>
        {repoGitHub}
      </div>
    );
  }
}