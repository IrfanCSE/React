import logo from './logo.svg';
import './App.css';
import second from './components/Header/Header'
import Header from './components/Header/Header';
import React from 'react';

class App extends React.Component {
  state = [{value:Date.now,label:"Todo One!",mark:true}]
  render() {
    return (
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header data={this.state}></Header>
      </div>
    );
  };
}

export default App;
