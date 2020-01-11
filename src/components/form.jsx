import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
class Form extends Component {
  state = { companyName: "", data: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.companyName}`
    );
    this.setState({ companyName: "" });
    //console.log(resp.data);
    this.setState({ data: resp.data });
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ color: "navy" }}>
          Ex:Facebook,Google,Microsoft..etc..,
        </span>
        <form style={{ marginTop: 10 }} onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.companyName}
            onChange={event =>
              this.setState({ companyName: event.target.value })
            }
            placeholder="Enter Company Name"
            required
          />
          <button>Go!</button>
        </form>
        <span style={{ fontSize: 20 }}>{this.state.data.login}</span>
        <div>
          <pre>
            {this.state.data ? (
              JSON.stringify(this.state.data, null, 1)
            ) : (
              <h6 style={{ color: "red" }}>valid company name required</h6>
            )}
          </pre>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Form;
