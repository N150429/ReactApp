import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Counters from "./components/counters";
import Form from "./components/form";
import Table from "./components/table";
import "./App.css";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="row container">
          <main className="col-md-3 offset-1">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </main>
          <div className="col-md-3" style={{ marginTop: 50 }}>
            <Form />
          </div>
        </div>
        <div className="col-md-10 offset-1" style={{ height: 200 }}>
          <Table />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
