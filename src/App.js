import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Body from './components/Body/Body';

class App extends React.Component {
  state = { list: [], value: '', filter: "all", sort: "Added date" };

  onSetChanges = (val) => {
    const { list } = this.state;

    list.push({ value: Date.now(), label: val, mark: false })
    this.setState({ list, value: "" })
  }

  onFiltered = (filter) => {
    console.log(filter)
    const list = filter === "completed" ? this.state.list.filter(x => x.mark === true) : filter === "not completed" ? this.state.list.filter(x => x.mark === false) : this.state.list;

    this.setState({ list });
  }

  onSort = (sort) => {
    const { list } = this.state;

    const workingList = sort === "ascending" ? list.sort((a, b) => a.value - b.value) : list.sort((a, b) => b.value - a.value);

    this.setState({ list: workingList });
  }

  onSetValue = (val) => {
    this.setState({ value: val.target.value })
  }
  onSetCheckValue = (val, check) => {
    const { list } = this.state;
    const newList = list.map(x => {
      if (x.value === val) {
        return { ...x, mark: check }
      }
      return x
    })

    this.setState({ list: newList })
  }

  onRemove = (val) => {
    const { list } = this.state;
    const newList = list.filter(x => {
      if (x.value !== val) {
        return x;
      }
    })

    this.setState({ list: newList })
  }

  render() {
    return (
      <>
        <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
          <Header state={this.state} setValue={this.onSetValue} changeState={this.onSetChanges}></Header>
          <div className="p-2 mx-4 border-black-25 border-bottom"></div>
          <Body filter={this.onFiltered} sort={this.onSort} onRemove={this.onRemove} checked={this.onSetCheckValue} list={this.state.list}></Body>
        </div>


      </>
    );
  };
}

export default App;
