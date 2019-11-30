import React, { Component } from "react";

class App extends Component {
  state = {
    newItem: "",
    list: []
  };

  handleChange = ({ currentTarget: input }) => {
    // update react state
    const newItem = input.value;
    this.setState({ newItem });
  };

  addItem() {
    //create item with unique id
    const newItem = {
      id: Date.now(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];
    // add new item
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];
    //filter out item to be deleted
    const updatedList = list.filter(item => item.id !== id);
    //update the state
    this.setState({ list: updatedList });
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log("Item Added");
  };

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-md-center">
          <div className="list col-8 m-4 p-4">
            <h2>TO DO LIST</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Add Item...</label>
                <input
                  autoFocus
                  id="newItem"
                  name="newItem"
                  className="form-control"
                  type="text"
                  placeholder="Type item here..."
                  value={this.state.newItem}
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => this.addItem()}
              >
                Add
              </button>
            </form>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="btn btn-sm btn-danger m-1"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i
                        style={{ cursor: "pointer" }}
                        className="fa fa-trash"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
