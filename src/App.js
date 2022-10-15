import './App.css';
import Header from './components/Header/Header';
import React from 'react';

class App extends React.Component {
  state = { list: []};

  onSetChanges = (value) => {
    const {list} = this.state;
    list.push({ value: Date.now, label: value, mark: false })
    this.setState({ list:list })
  }

  render() {
    console.log("app render")
    return (
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header changeState={this.onSetChanges}></Header>
      </div>
    );
  };
}

export default App;
